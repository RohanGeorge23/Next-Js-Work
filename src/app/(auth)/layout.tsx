import React from "react"

export default function({children}: {children:React.ReactNode}){
    return <div>

            <div className="bg-yellow-200 text-center border-b">
                Signup to get 20% off on all course for next 3 days, Hurry! :)
            </div>

            {children}
        </div>
}