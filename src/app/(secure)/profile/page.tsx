import classnames from "classnames";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <>
      <div className="bg-gray-111  min-h-screen flex flex-col justify-center items-center">
        <div className="text-5xl font-normal">
          <h1 className="text-white ">Who is watching?</h1>
        </div>
        <div className="flex md:flex-row flex-col place-items-center mt-5">
          <div className="text-white text-4xl font-semibold bg-ocean-blue text-center py-[80px] h-[187px] w-[237px] mt-6">
            Augustine
          </div>
          <div
            className={classnames(
              styles.kid,
              "text-white text-4xl text-center py-[80px] h-[187px] w-[237px] md:ml-6 mt-6"
            )}
          >
            Kids
          </div>
          <div>
            <div className="text-center text-7xl text-white rounded-full px-[25px] py-[10px] bg-gray-500 md:ml-6 mt-6">
              +
            </div>
            <div className="text-right text-white mt-4">Add profile</div>
          </div>
        </div>
      </div>
    </>
  );
}
