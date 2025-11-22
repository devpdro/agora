"use client";

import React, { createContext, useContext, useRef } from "react";

import { useScroll, useTransform, motion, MotionValue } from "motion/react";

import { cn } from "@/lib/utils";

type TextOpacityEnum = "none" | "soft" | "medium";

type ViewTypeEnum = "word" | "letter";

type TextGradientScrollType = {
    text: string;
    type?: ViewTypeEnum;
    className?: string;
    textOpacity?: TextOpacityEnum;
};

type LetterType = {
    children: React.ReactNode | string;
    progress: MotionValue<number>;
    range: number[];
};

type WordType = {
    children: React.ReactNode;
    progress: MotionValue<number>;
    range: number[];
};

type CharType = {
    children: React.ReactNode;
    progress: MotionValue<number>;
    range: number[];
};

type TextGradientScrollContextType = {
    textOpacity?: TextOpacityEnum;
    type?: ViewTypeEnum;
};

const TextGradientScrollContext = createContext<TextGradientScrollContextType>(
    {}
);

function useGradientScroll() {
    const context = useContext(TextGradientScrollContext);
    return context;
}

function TextGradientScroll({
    text,
    className,
    type = "letter",
    textOpacity = "soft",
}: TextGradientScrollType) {
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 1", "end 0.5"],
    });

    const words = text.split(" ");
    const totalChars = text.length; // Inclui espaços

    return (
        <TextGradientScrollContext.Provider value={{ textOpacity, type }}>
            <p ref={ref} className={cn("relative flex m-0 flex-wrap", className)}>
                {words.map((word, i) => {
                    // Encontrar a posição da palavra no texto original
                    const textBeforeWord = words.slice(0, i).join(" ") + (i > 0 ? " " : "");
                    const wordStart = textBeforeWord.length / totalChars;
                    const wordEnd = (textBeforeWord.length + word.length) / totalChars;

                    return (
                        <React.Fragment key={i}>
                            {type === "word" ? (
                                <Word progress={scrollYProgress} range={[wordStart, wordEnd]}>
                                    {word}
                                </Word>
                            ) : (
                                <Letter progress={scrollYProgress} range={[wordStart, wordEnd]}>
                                    {word}
                                </Letter>
                            )}
                            {i < words.length - 1 && <span className="inline-block w-[0.3em]" aria-hidden="true" />}
                        </React.Fragment>
                    );
                })}
            </p>
        </TextGradientScrollContext.Provider>
    );
}

export { TextGradientScroll };

const Word = ({ children, progress, range }: WordType) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="relative me-2 mt-2">
            <span style={{ position: "absolute", opacity: 0.1 }}>{children}</span>
            <motion.span style={{ transition: "all .5s", opacity: opacity }}>
                {children}
            </motion.span>
        </span>
    );
};

const Letter = ({ children, progress, range }: LetterType) => {
    if (typeof children === "string") {
        const wordLength = children.length;
        const rangeSize = range[1] - range[0];
        const charStep = rangeSize / wordLength;

        return (
            <span className="relative me-2 mt-2">
                {children.split("").map((char: string, i: number) => {
                    const charStart = range[0] + (i * charStep);
                    const charEnd = range[0] + ((i + 1) * charStep);
                    return (
                        <Char key={`c_${i}`} progress={progress} range={[charStart, charEnd]}>
                            {char}
                        </Char>
                    );
                })}
            </span>
        );
    }
};

const Char = ({ children, progress, range }: CharType) => {
    const opacity = useTransform(progress, range, [0, 1]);
    const { textOpacity } = useGradientScroll();

    return (
        <span>
            <span
                className={cn("absolute", {
                    "opacity-0": textOpacity == "none",
                    "opacity-10": textOpacity == "soft",
                    "opacity-30": textOpacity == "medium",
                })}
            >
                {children}
            </span>
            <motion.span
                style={{
                    transition: "all .5s",
                    opacity: opacity,
                }}
            >
                {children}
            </motion.span>
        </span>
    );
};

