export default function Footer() {
  return (
    <div className="w-full bg-gray-translucent/60 text-white mt-10 p-4">
      <div className="flex flex-col w-[60%] mx-auto mt-10">
        <p>
          Questions? <a>Contact Us</a>
        </p>
      </div>

      <div className="w-[60%] mx-auto text-gray-b3  my-5">
        <ul className="grid md:grid-cols-4  gap-4 ">
          <li>FAQ</li>
          <li>Help Center</li>
          <li>Terminal</li>
          <li>Privacy</li>
          <li>Cookie Preference</li>
          <li>Corporate Information</li>
        </ul>
      </div>
    </div>
  );
}
