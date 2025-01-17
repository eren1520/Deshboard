import React from "react";
import Label from "./Label";
import { CgProfile } from "react-icons/cg";
import { FaDownload } from "react-icons/fa";

const Mail = ({ selectedMail, onBack }) => {
  if (!selectedMail) {
    return <div className="text-white">No mail selected</div>;
  }

  return (
    <div className="bg-[#293146] text-white rounded-lg shadow-lg w-auto  space-y-4">
      <Label />
      <div className="px-6">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b border-gray-600 ">
          <h2 className="text-xl font-semibold">{selectedMail.subject}</h2>

        </div>

        {/* Sender Info */}
        <div className="flex justify-between">
          <div className="flex items-center py-3">
            <CgProfile className="w-12 h-12 mr-4" />

            <div>
              <p className="font-bold">Steven Smith</p>
              <p className="text-sm text-gray-400">jonathan@domain.com</p>
            </div>
          </div>

          {/* Date/Time */}
          <p className="text-gray-400 text-sm pt-3">Dec 14, 2021, 5:17 AM</p>
        </div>


        {/* Mail Content */}
        <div className="text-gray-200 text-sm leading-relaxed">
          <p className="inline whitespace-nowrap">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque  penatibus et magnis dis<br/> parturient montes, nascetur ridiculus mus          </p>
          <ul className="list-decimal pl-5 mt-4">
            <li>Pellentesque vitae tortor tempus.</li>
            <li>Nunc ultrices lacus mollis arcu.</li>
            <li>Donec et eros placerat lacus.</li>
            <li>Sed semper tellus nec ligula varius, vitae consequat mi scelerisque.</li>
            <li>Proin ac mauris sodales, pulvinar eros eget, viverra lacus.
            </li>
          </ul>
          <p className="mt-2">FDonec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
          <p className="">eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus</p>
          <p className="">elementum semper nisi.</p>

          <p className="mt-4">Thanks,</p>
          <p className=" font-semibold pb-2">Jane</p>
        </div>
        <div className="h-[1px] w-full bg-gray-400"></div>
        {/* Attachments Section */}
        <div className=" py-2">
          <h2 className="text-lg font-semibold text-[#B4B7BC]">Attachments</h2>
          <div className="flex flex-wrap gap-4 mt-4">
            {/* Attachment 1 */}
            <div className="flex items-center justify-between w-[32%] p-2 border-[1px] border-gray-600 rounded-lg ">
              <div className="flex items-center gap-2 ">
                <span className="bg-blue-100 text-blue-600 font-medium text-sm rounded px-2 py-2">
                  .ZIP
                </span>
                <div>
                  <p className="text-sm text-[#B4B7BC] font-semibold">
                    design.zip
                  </p>
                  <p className="text-xs text-gray-400">2.3 MB</p>
                </div>
              </div>
              <FaDownload className="w-4 h-4 text-gray-400"/>

            </div>
            {/* Attachment 2 */}
            <div className="flex items-center justify-between w-[32%] p-2 border-[1px] border-gray-600 rounded-lg ">
              <div className="flex items-center gap-2 ">
                <span className="bg-blue-100 text-blue-600 font-medium text-sm rounded px-2 py-2">
                  .JPG
                </span>
                <div>
                  <p className="text-sm text-[#B4B7BC] font-semibold">
                    design.jpg
                  </p>
                  <p className="text-xs text-gray-400">3.5 MB</p>
                </div>
              </div>
              <FaDownload className="w-4 h-4 text-gray-400"/>

            </div>
            {/* Attachment 3 */}
            <div className="flex items-center justify-between w-[32%] p-2 border-[1px] border-gray-600 rounded-lg ">
              <div className="flex items-center gap-2 ">
                <span className="bg-blue-100 text-blue-600 font-medium text-sm rounded px-2 py-2">
                  .MP4
                </span>
                <div>
                  <p className="text-sm text-[#B4B7BC] font-semibold">
                    report.mp4
                  </p>
                  <p className="text-xs text-gray-400">7.04 MB</p>
                </div>
              </div>
              <FaDownload className="w-4 h-4 text-gray-400"/>

            </div>
          </div>
        </div>

        {/* Reply and Forward Buttons */}
        <div className="flex gap-4 py-12">
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
            ↩ Reply
          </button>
          <button className="bg-purple-200 text-purple-700 font-semibold py-2 px-4 rounded-lg hover:bg-purple-300">
            Forward →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mail;

