'use client'
import Form from '../components/input/InputForm'
import Historic from '../components/distances_historic/DistanceHistory'

export default function Home() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center relative p-4 h-full">
            {/* Centered Form */}
            <div className="flex justify-center items-center w-full max-w-3xl h-full">
                <Form/>
            </div>

            {/* Logs positioned at the top-right on large screens, below on smaller screens */}
            <div className="sm:absolute sm:top-4 sm:right-4 sm:w-80 sm:max-h-[calc(100vh-80px)] sm:block w-full flex justify-center mt-6 sm:mt-0">
                <Historic/>
            </div>
        </div>
    );
}