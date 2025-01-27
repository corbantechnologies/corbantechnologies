import { AtSign, Phone, Sun } from "lucide-react"

function Contact() {
  return (
    <div className="px-4 lg:px-8 bg-primary2 py-10">
        <div className="p-4 rounded-xl lg:max-w-screen-lg mx-auto flex flex-col items-center justify-center md:flex-row gap-16">
            <div className="industryBg p-5 w-full sm:w-3/4 md:w-auto rounded-xl ">
                <h2 className="text-2xl">Contact information</h2>
                <ul className="py-16 space-y-5">
                    <li className="flex gap-2">
                    <AtSign className="flex-shrink-0"/>
                    <div className="flex flex-col">
                        <p className="text-lg text-gray-800">Email</p>
                        <p className="text-sm text-gray-600">info@corbantechnologies.org</p>
                    </div>
                    </li>
                    <li className="flex gap-2">
                    <Phone className="flex-shrink-0"/>
                    <div className="flex flex-col">
                        <p className="text-lg text-gray-800">Phone</p>
                        <p className="text-sm text-gray-600">+254710507872</p>
                    </div>
                    </li>
                    <li className="flex gap-2">
                    <Sun className="flex-shrink-0"/>
                    <div className="flex flex-col">
                        <p className="text-lg text-gray-800">Working hours</p>
                        <p className="text-sm text-gray-600">8 a.m - 5 p.m</p>
                    </div>
                    </li>
                </ul>
            </div>
            <form className="flex-grow w-full sm:w-3/4 md:w-auto p-5">
            <h2 className="text-2xl mb-5">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col">
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" className="w-full rounded-md p-2" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Your email</label>
                    <input type="email" id="email" className="w-full rounded-md p-2" />
                </div>
            </div>
            <div className="flex flex-col my-3">
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject" className="w-full rounded-md p-2" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" id="message" className="w-full rounded-md p-2" />
            </div>
            <button className="bg-white text-black transition-all duration-500 hover:text-primary rounded-full py-3 px-5 float-end mt-5">Send message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact