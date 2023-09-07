import Typical from 'react-typical'

export default function Home(){
    return(
        <div className="text-black bg-gray-400 mt-10 mb-10 p-5 rounded-2xl  lg:w-2/3 lg:m-auto lg:mt-10 lg:mb-10 lg:p-20 lg:pl-20 lg:flex lg:justify-between">
            <div>
            <h1 className='lg:text-6xl md:text-4xl text-3xl lg:p-5'>Henlo,</h1>
            <h2 className='lg:text-2xl lg:p-5'>I am <a className='lg:text-4xl md:text-xl text-xl'>Tahmid Islam</a></h2>
            <h3 className='lg:text-2xl lg:p-5'>I am a {" "}
            <Typical 
            className="text-red-600 lg:text-3xl"
            loop={Infinity}
            wrapper="b"
            steps={[
                'Student 🧑‍🎓',
                2000,
                'Tech Enthusiast 👨‍💻',
                2000,
                'Developer(wannabe) 💻',
                2000, 
                'Photographer 📷',
                2000
            ]}
            />
            </h3>
            </div>
            <div>
                <img className='object-cover lg:h-80 lg:w-80 rounded-full lg:border-8 block lg:none w-0 h-0' src="/public/img/tahmid.jpg" alt="Tahmid" />
            </div>
        </div>
    );
}