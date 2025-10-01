import { useEffect, useState } from "react";

const API = "https://bright-ants-backend.onrender.com";

const Attorneys = () => {
  const [attorneys, setAttorneys] = useState([]);
  useEffect(() => {
    fetch(`${API}/attorneys`)
      .then((res) => res.json())
      .then((data) => {
        setAttorneys(data.data);
      });
  }, []);

  return (
    <div className="px-5 lg:px-[138px] pt-[30px] pb-[14px] lg:pt-20 mb-24 lg:mb-[162px] shadow-[4px_4px_8px_0_rgba(0,0,0,0.25)] bg-[#1C1A1F]">
      <div>
        <h1>Let's Meet Our Attorney's</h1>
        <p className="mt-[7px] text-center">
          We believe that great design extends to every industry—including the
          legal field. We collaborate with experienced and highly skilled
          attorneys who bring expertise, professionalism, and dedication to
          every case. Our team ensures that legal branding, presentations, and
          briefs are as polished and compelling as the arguments they support.
          Meet the legal professionals who are ready to guide, advise, and
          represent you with confidence and clarity. Expertise, trust, and
          results—delivered with precision.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {attorneys.map((attorney) => (
          <div
            key={attorney.id}
            className="flex flex-col justify-center items-center mt-[30px] p-5"
          >
            <div>
              <img
                className="w-[318px] h-[364px] max-w-full rounded-t-[20px] object-cover bg-[#d8d8d8] mb-[21px]"
                src={`${API}/files/${attorney.image}`}
                alt="attorney"
              />
            </div>
            <h3>{attorney.name}</h3>
            <p>{attorney.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attorneys;
