"use client";
import Image from "next/image";
import React from "react";

const ProfileSection = () => {
  return (
    <section className="p-4 bg-[#F3F8FF] rounded-lg flex items-center justify-between">
      <div className="flex space-x-2">
        <div className="flex flex-col justify-between space-y-3 items-center ">
          <div className="w-[65px] aspect-square rounded-full flex items-center space-x-1 justify-center bg-[#6479AB30] text-[22px] text-[#071C5070] font-semibold">
            <span>J</span>
            <span>D</span>
          </div>

          <p className="hover:text-blue-500 cursor-pointer text-[#7D9BE7] hover:bg-transparent hover:underline transition duration-300 ease-in-out">
            Edit
          </p>
        </div>

        <div className="flex flex-col justify-between space-y-3">
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-[#071C50] ">
              <p className="text-[22px] font-semibold">John Doe</p>
              <p className="text-xs py-1 px-4 rounded-3xl bg-[#DDEAFB]">
                Interview
              </p>
            </div>

            <div className="flex items-center space-x-4 text-[#071C50] text-[14px] opacity-50 font-light">
              <p>John.Doe@gmail.com</p>

              <span className="w-px h-2 bg-[#071C50]"></span>

              <p>+250 788 492 456</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 pb-1">
            <svg
              width={14}
              height={14}
              className="cursor-pointer"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8149 0H1.18111C0.529111 0 0 0.516667 0 1.15289V14.8456C0 15.4827 0.529111 16 1.18111 16H14.8149C15.4673 16 16 15.4827 16 14.8456V1.15289C16 0.516667 15.4673 0 14.8149 0ZM4.74533 13.6342H2.37111V5.99889H4.74533V13.6342ZM3.55822 4.95489C2.79756 4.95489 2.18267 4.33844 2.18267 3.57844C2.18267 2.81956 2.79756 2.20311 3.55822 2.20311C4.31711 2.20311 4.93356 2.81956 4.93356 3.57844C4.93356 4.33844 4.31711 4.95489 3.55822 4.95489ZM13.6333 13.6342H11.2629V9.92133C11.2629 9.03556 11.2456 7.89667 10.0293 7.89667C8.79422 7.89667 8.606 8.86133 8.606 9.85711V13.6344H6.23378V5.99889H8.51044V7.04156H8.54289C8.85978 6.44156 9.634 5.80844 10.7887 5.80844C13.19 5.80844 13.6336 7.38933 13.6336 9.446L13.6333 13.6342Z"
                fill="#4B93E7"
              />
            </svg>

            <svg
              width={14}
              height={16}
              className="cursor-pointer"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.07541 15.9938C6.55382 16.0433 8.02715 15.7959 9.40832 15.2662C10.7895 14.7366 12.0505 13.9355 13.1168 12.9102C14.1831 11.8849 15.033 10.6563 15.6164 9.29698C16.1997 7.93763 16.5047 6.47513 16.5132 4.99591C17.1907 4.15749 17.6938 3.19209 17.9929 2.15646C18.0153 2.07463 18.0135 1.9881 17.9877 1.90728C17.962 1.82646 17.9135 1.75479 17.848 1.70091C17.7825 1.64703 17.7028 1.61323 17.6186 1.60359C17.5343 1.59395 17.449 1.60887 17.3731 1.64656C17.0186 1.81718 16.6196 1.87229 16.2321 1.80413C15.8447 1.73597 15.4884 1.54798 15.2135 1.26663C14.8625 0.88228 14.4379 0.572291 13.965 0.35503C13.492 0.137768 12.9802 0.0176537 12.4599 0.00180381C11.9397 -0.0140461 11.4216 0.074691 10.9362 0.262757C10.4509 0.450823 10.0083 0.734391 9.63454 1.09666C9.12283 1.59222 8.74803 2.21174 8.54655 2.89499C8.34508 3.57825 8.32379 4.302 8.48475 4.99591C5.1354 5.19588 2.83584 3.60618 0.996189 1.4266C0.940922 1.36401 0.868627 1.31887 0.788131 1.29669C0.707636 1.27451 0.622423 1.27625 0.5429 1.3017C0.463377 1.32715 0.392985 1.3752 0.34032 1.43999C0.287655 1.50478 0.254996 1.58351 0.246332 1.66655C-0.104131 3.6106 0.14868 5.61534 0.970812 7.41152C1.79294 9.2077 3.14502 10.7093 4.84545 11.7146C3.70531 13.0222 2.10419 13.8389 0.376307 13.9942C0.283737 14.0095 0.198283 14.0535 0.131905 14.1198C0.0655277 14.1861 0.0215483 14.2715 0.00612198 14.3641C-0.0093043 14.4566 0.0045948 14.5517 0.045874 14.636C0.0871532 14.7202 0.153747 14.7895 0.236334 14.834C1.73957 15.5853 3.39496 15.982 5.07541 15.9938Z"
                fill="#4B93E7"
              />
            </svg>

            <svg
              width={14}
              height={14}
              className="cursor-pointer"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.488 9.6C11.552 9.072 11.6 8.544 11.6 8C11.6 7.456 11.552 6.928 11.488 6.4H14.192C14.32 6.912 14.4 7.448 14.4 8C14.4 8.552 14.32 9.088 14.192 9.6M10.072 14.048C10.552 13.16 10.92 12.2 11.176 11.2H13.536C12.768 12.52 11.544 13.544 10.072 14.048ZM9.872 9.6H6.128C6.048 9.072 6 8.544 6 8C6 7.456 6.048 6.92 6.128 6.4H9.872C9.944 6.92 10 7.456 10 8C10 8.544 9.944 9.072 9.872 9.6ZM8 14.368C7.336 13.408 6.8 12.344 6.472 11.2H9.528C9.2 12.344 8.664 13.408 8 14.368ZM4.8 4.8H2.464C3.224 3.472 4.456 2.448 5.92 1.952C5.44 2.84 5.08 3.8 4.8 4.8ZM2.464 11.2H4.8C5.08 12.2 5.44 13.16 5.92 14.048C4.456 13.544 3.224 12.52 2.464 11.2ZM1.808 9.6C1.68 9.088 1.6 8.552 1.6 8C1.6 7.448 1.68 6.912 1.808 6.4H4.512C4.448 6.928 4.4 7.456 4.4 8C4.4 8.544 4.448 9.072 4.512 9.6M8 1.624C8.664 2.584 9.2 3.656 9.528 4.8H6.472C6.8 3.656 7.336 2.584 8 1.624ZM13.536 4.8H11.176C10.92 3.8 10.552 2.84 10.072 1.952C11.544 2.456 12.768 3.472 13.536 4.8ZM8 0C3.576 0 0 3.6 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 6.94943 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0Z"
                fill="#4B93E7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="border-l-[2px] border-[#E5EDF9] pr-12 pl-24">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#071C50] font-semibold">Current Status</h1>

          <div className="">
            <div className="flex items-center justify-between space-x-7">
              <div className="space-y-4 text-[#071C50]/50 font-light">
                <p className="">Round</p>
                <p className="">Assigned to</p>
                <p className="">Interview Date</p>
              </div>

              <div className="space-y-4">
                <p className="text-xs py-1 px-4 rounded-3xl bg-[#DDEAFB]">
                  Interview
                </p>

                <span className="flex items-center space-x-6 bg-[#DDEAFB] rounded-2xl text-center pr-8">
                  <span className="w-[22px] aspect-square rounded-full ring-4 ring-[#BDD4F3] overflow-hidden relative">
                    <Image
                      alt="image"
                      src={"/images/profile.png"}
                      className="w-full h-full absolute"
                      fill
                      style={{
                        objectFit: "cover"
                      }}
                    />
                  </span>
                  <span
                    className={
                      "text-[##071C50] flex self-end text-center rounded-r-2xl py-1 text-[12px] font-semibold"
                    }
                  >
                    John Doe
                  </span>
                </span>

                <p className="text-[#071C50] font-semibold">Jul 30, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
