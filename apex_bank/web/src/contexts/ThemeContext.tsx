"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

export type Theme = "green"

interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error("useTheme must be used within ThemeProvider")
    return context
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme] = useState<Theme>("green")

    // Theme is always green - apply it once on mount via a side effect on render
    if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", "green")
    }

    const setTheme = (_theme: Theme) => {
        // No-op: only green theme is supported
    }

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
