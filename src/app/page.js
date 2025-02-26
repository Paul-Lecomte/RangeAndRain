'use client'
import Form from '../components/input/InputForm'
import Historic from '../components/distances_historic/DistanceHistory'

export default function Home() {
    return (
        <div className="relative min-h-full p-4 flex flex-col sm:flex-row items-center justify-center sm:space-x-8">
            {/* Form centered in the middle */}
            <div className="flex justify-center items-center w-full max-w-3xl">
                <Form />
            </div>

            {/* Logs positioned at the top-right on larger screens, stacked below on smaller screens */}
            <div className="sm:absolute sm:top-4 sm:right-4 sm:w-80 sm:max-h-[calc(100vh-80px)] sm:max-w-[calc(35vh-80px)] sm:block flex items-center justify-center w-full">
                <Historic />
            </div>
        </div>
    );
}