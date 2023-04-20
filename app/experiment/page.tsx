"use client"

import { useState, useEffect } from "react"

export default function Contact() {
    const [order, setOrder] = useState(0)

    return (
        <section className="flex flex-row">
            <div className="w-10 h-10 border bg-red-500 border-black order-1">1</div>
            <div className="w-10 h-10 border bg-green-500 border-black order-2">3</div>
            <div className="w-10 h-10 border bg-yellow-500 border-black order-3">2</div>
            <div className="w-10 h-10 border bg-blue-500 border-black order-4">4</div>
        </section>
    )
}