import React from 'react'
import '../styles/roadmap.css'
import Input from '../components/input'

export default function RoadMap() {
  return (
    <div className='roadmap-container'>
        <section className='formContainer'>
            <div className='container-detail'>
                <h1>Road Map</h1>
                <p>Select your favorite Categories</p>
            </div>
            <form>
                <div>
                    <label>Stack</label>
                    <input
                        className="focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300"
                        type="text"
                        placeholder="Select you stack"
                        autoComplete="email"
                        // {...register("email")}
                    />
                  </div>
                  
                  <div>
                    <label>Level</label>
                    <input
                        className="focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300"
                        type="text"
                        placeholder="Select you stack"
                        autoComplete="email"
                        // {...register("email")}
                    />
                </div>
            </form>
            <div>button</div>
        </section>
        
        <section className='svgContainer'>
            <div></div>
        </section>
    </div>
  )
}
