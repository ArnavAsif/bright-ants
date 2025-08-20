/* eslint-disable no-unused-vars */
import redBg from '../../assets/bg-we.png';
import blueBg from '../../assets/bg-blue.png';
import { useState } from 'react';

const ContactUs = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
      });
    
      const [status, setStatus] = useState('');
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
          setStatus('Please fill out all fields.');
          return;
        }
    
        try {
          const res = await fetch('https://bright-ants-backend.onrender.com/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const result = await res.json();
    
          if (res.ok) {
            setStatus('✅ Email sent successfully!');
            setFormData({ firstname: '', lastname: '', email: '', message: '' });
          } else {
            setStatus(`❌ ${result.error || 'Something went wrong.'}`);
          }
        } catch (err) {
          setStatus('❌ Failed to send email.');
        }
      };

    return (
        <section id="contact" className="text-white px-4 py-12 w-10/12 mx-auto relative z-10">
            <div className="hidden lg:block absolute inset-0 max-w-[1173px] mx-auto left-0 right-0 z-0 opacity-45 pointer-events-none">
                <div className="grid grid-cols-2 h-full">
                    <img src={redBg} alt="Red BG" className="w-full object-contain" />
                    <img src={blueBg} alt="Blue BG" className="w-full object-contain" />
                </div>
            </div>
            <div className='max-w-[1034px] mx-auto pb-12 relative'>
                <h1 className='text-[34px]/[64px] lg:text-6xl/[64px] font-extrabold text-center tracking-[-3%] font-figtree'>Contact Us</h1>
                <p className='font-mulish lg:text-lg/[24px] tracking-[0%] text-center my-[10px]'>
                    Have a question or need a creative solution for your brand? We're here to help! Whether you're looking for graphic design, web development, UI/UX services, or digital media design, our team is ready to bring your vision to life. Fill out the contact form below or reach out directly—we'd love to hear from you! Let's create something amazing together.
                </p>
                <p className='text-[#D8D8D8] font-mulish lg:text-lg/[24px] tracking-[0%] font-bold text-center'>{'Home > contact'}</p>
            </div>
            <div className="max-w-[1173px] mx-auto flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-10">
                {/* Contact Info */}
                <div className="flex-1 flex justify-center md:justify-start items-center">
                    <div>
                        <h2 className="text-[34px] md:text-6xl text-[#FAFAFA] font-extrabold mb-[30px]">Contact Us</h2>

                        <div className="flex flex-col md:flex-row gap-10 md:gap-[54px]">
                            {/* Bangladesh Office */}
                            <div className="mb-8">
                                <h4 className="font-semibold text-[#FAFAFA] mb-[9px]">BANGLADESH OFFICE</h4>
                                <p className="text-[#FAFAFA] leading-relaxed">
                                    House 19, Road 6,<br />
                                    Block E, Banasree<br />
                                    Dhaka-1219
                                </p>
                                <p className="mt-3 md:mt-[52px]">
                                    Phone: <a href="tel:+8801309296713" className="text-[#2176F5] hover:underline">+880 1309296713</a>
                                </p>
                                <p className="mt-[13px]">
                                    Email: <a href="mailto:info@brightants.com" className="text-[#2176F5] hover:underline">info@brightants.com</a>
                                </p>
                            </div>

                            {/* UK Office */}
                            <div className="mb-8">
                                <h4 className="font-semibold text-[#FAFAFA] mb-[9px]">UK OFFICE</h4>
                                <p className="text-[#FAFAFA] leading-relaxed">
                                    China Works<br />
                                    100 Black Prince Rd<br />
                                    London<br />
                                    SE1 7SJ
                                </p>
                                <p className="mt-[24px]">
                                    Phone: <a href="tel:+36306358061" className="text-[#00A3FF] hover:underline">+36306358061</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex-1 max-w-[514px] max-h-[609px] w-full h-full bg-[#202123] shadow-sm rounded-lg ">
          <div className="py-[55px] px-[42px]">
            <h3 className="text-xl font-bold mb-[34px]">Ask Us Anything!</h3>
            <form className="space-y-[18px]" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-[30px]">
                <div className="flex-1">
                  <label className="block text-sm mb-1">First name*</label>
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-[#D9D9D9] text-black outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-1">Last name*</label>
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-[#D9D9D9] text-black outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-[#D9D9D9] text-black outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">What can we help you with?</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-[#D9D9D9] text-black outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E40017] text-white font-semibold py-2 rounded hover:bg-red-700 transition-colors"
              >
                Submit
              </button>

              {status && (
                <p className="text-sm mt-3">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
            </div>
        </section>
    );
};

export default ContactUs;
