import React,{useState} from "react";
import "./Home.css";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <div className="w-full h-auto border mx-auto  bg-[#F6F7FF] flex align-center justify-evenly p-4">
          <div className="container mx-auto max-w-[1200px]">
            <nav
              id="nav"
              className={ `w-[82%] mx-auto flex align-center justify-between mobile:w-[85%] mobile:nav-links ${isOpen ? "nav-active" : ""}`}
            >
              <div className={` w-[30%] mobile:w-[40%] mobile:m-2 mobile:mt-3 tablet:w-1/6 tablet:m-2 tablet:ml-1  mobile:${isOpen ? "hidden" : "block" }`}>
                <img src="/assets/Group 20.svg" alt="" className="w-25 mobile:w-full" />
              </div>
              <div className={` text-[11px] font-semibold font-[Montserrat] flex align-center justify-between w-[65%] my-auto  tablet:w-1/2 tablet:text-[8px] tablet:mx-auto mobile:ml-32 mobile:${isOpen ? "block" : "hidden"}`}>
                <ul className="flex align-center justify-around w-[70%]  ml-10 p-4 mobile:flex-col tablet:ml-0 tablet:w-[120%] tablet:gap-2  ">
                  <li>HOME</li>
                  <li>VIDEOS</li>
                  <li>GAMES</li>
                  <li>FORUMS</li>
                  <li>PAGES</li>
                  <li>CONTACT</li>
                </ul>
                <ul className="flex align-center justify-between py-2 mr-[-30px] w-[25%] mobile:flex-col">
                  <li>
                    <button className="p-2 px-2 text-[#9747FF] mobile:ml-3 mobile:mt-0">LOGIN</button>
                  </li>
                  <li>
                    <button className="bg-[#9747FF] text-white px-4 rounded-md p-2 mobile:ml-0 mobile:mt-0">
                      REGISTER
                    </button>
                  </li>
                </ul>
                
              </div>
              <div><img src="/assets/close.png" className={`nav-tog w-[30px] none mobile:visible nav-links ${isOpen ? "nav-active" : ""}`}  onClick={handleToggle}/></div>
              <div className= "nav-toggle w-25 hidden mobile:block mobile:mt-2" onClick={handleToggle}>
              &#9776;
            </div>
            </nav>
          </div>
        </div>
        <div className="w-full h-auto p-10 mobile:bg-cover mobile:bg-center tablet:bg-contain tablet:bg-center" id="first" >
          <div className="container mx-auto max-w-[1200px]">
            <div className="w-1/2 mx-auto my-4  mobile:w-[94%]">
              <div className="w-auto my-6 tablet:m-0">
                <h1 className="font-[Adlery] text-4xl mx-auto p-2 px-8 ml-14 my-3 text-[#FBDA2E] mobile:w-full mobile:text-2xl mobile:ml-6  tablet:ml-0 tablet:px-0 tablet:text-3xl">
                  Unleash Your Inner Champion
                </h1>
                <h1 className="font-[Adlery] text-4xl text-[#FBDA2E] tablet:w-[140%]  tablet:px-0 tablet:ml-[-60px] mobile:m-0 mobile:ml-[-20px] mobile:w-[120%] tablet:text-3xl mobile:text-2xl">
                  Dive into the Ultimate Gaming Experience!
                </h1>
              </div>
              <div className="text-white text-sm mx-40 flex font-[Montserrat] w-full mobile:ml-8 tablet:mx-auto  tablet:p-2 tablet:ml-16">
                <button className="border font-medium border-white p-2 px-4 rounded-lg m-2 mobile:p-2 tablet:p-2 tablet:text-xs">
                  KNOW MORE
                </button>
                <button className="bg-[#CAAC0F] font-bold p-2 px-4 rounded-lg m-2 tablet:p-2 tablet:text-xs">
                  GET NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-20 bg-[#6E3FAB] p-3">
          <div className="container mx-auto max-w-[1200px]">
            <div className="flex w-[81%] mx-auto py-2 text-white  align-center justify-between mobile:w-[80%] mobile:mx-auto ">
              <div>
                <h2 className="font-[Montserrat] text-sm font-bold mobile:text-xs">
                  FEATURED GAMES
                </h2>
                <p className="font-[Poppins] font-medium text-xs">
                  Top Picks - Hottest Games of the Season
                </p>
              </div>
              <div>
                <button className="font-[Montserrat] font-semibold border border-white rounded-lg text-xs p-2 px-4  mobile:p-1 mobile:text-[10px] ">
                  SEE ALL
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[#131212] w-full ">
          <div className="container max-w-[1200px] mx-auto ">
            <div className=" w-[100%] ml-[71px] overflow-hidden mobile:ml-0 tablet:ml-0">
            <div className=" w-[106%] py-8 pl-20 mx-[-30px] overflow-hidden flex align-center justify-between mobile:flex-col mobile:justify-center mobile:align-middle mobile:overflow-hidden mobile:mr-0 mobile:w-[80%]  tablet:w-[100%] tablet:overflow-hidden tablet:pl-24 tablet:mx-0 " >
              <img className="w-56 tablet:w-32 mobile:w-[100%] mobile:mx-auto mobile:m-2" src="/assets/Rectangle 9.svg" alt="" />
              <img className="w-56 tablet:w-32 mobile:w-[100%] mobile:mx-auto mobile:m-2" src="/assets/Rectangle 10.svg" alt="" />
              <img className="w-56 tablet:w-32 mobile:w-[100%] mobile:mx-auto mobile:m-2" src="/assets/Rectangle 11.svg" alt="" />
              <img className="w-56 tablet:w-32 mobile:w-[100%] mobile:mx-auto mobile:m-2" src="/assets/Rectangle 14.svg" alt="" />
              <img className="w-44 tablet:w-24 mobile:w-[100%] mobile:mx-auto mobile:m-2 rounded-xl overflow-hidden" src="/assets/20694f878aeb9a4b3dc937e49bb0110d.png" alt="" />
            </div>
            </div>
          </div>
        </div>
        <div className="w-full flex align-center justify-center ">
          <div className="container mx-auto max-w-[1200px]">
            <div className="w-[100%] ">
              <div className="w-[60%]  p-4 mx-auto flex align-center justify-center flex-col tablet:w-[75%]">
                <h2 className="mx-auto font-[Montserrat] font-bold tablet:text-sm">
                  GAME CATEGORIES
                </h2>
                <p className="mx-auto my-1 font-[Poppins] font-medium text-sm text-[#666666] tablet:text-xs">
                  GameQuest - Discover, Pland Conquer the Best Games of the
                  Decade!
                </p>
                <div className="w-full ">
                  <div className="flex align-center justify-between w-[95%] mx-auto p-4 text-[10px] font-semibold font-[Montserrat] text-[#413600] mobile:flex-col tablet:w-full tablet:p-2 tablet:m-1 tablet:text-[8px] ">
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2 teblet:m-2">
                      PUZZLES
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2">
                      EPIC RGPS
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg bg-[#EFCB0E] text-white mobile:m-2">
                      ACTION
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2">
                      STRATEGY
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2">
                      SIMULATION
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2">
                      CLASSIC RETRO
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2 ">
                      RACING
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2">
                      SPORTS
                    </button>
                  </div>
                  <div className="flex align-center justify-between w-[60%] mx-auto text-[10px] font-bold font-[Montserrat] text-[#413600] mobile:flex-col mobile:w-full tablet:text-[8px] tablet:w-[62%]">
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2 mobile:mt-0 mobile:w-[89%] mobile:ml-5">
                      ADVENTURE
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2 mobile:px-4 mobile:w-[89%] mobile:ml-5">
                      MULTIPLAYER MAYHEM
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2 mobile:w-[89%] mobile:ml-5">
                      IMMERSIVE VR EXPERIENCES
                    </button>
                  </div>
                </div>
                <div className="mx-auto my-3 w-auto relative mobile:w-[90%]  " >
                  <img src="/assets/Vector (24).svg" className="w-3 absolute top-5 left-5 tablet:top-4 tablet:left-4 mobile:top-5" alt="" />
                  <input
                    type="text"
                    placeholder="SEARCH FOR GAMES"
                    className="border border-black rounded-lg p-2 px-8 text-xs  m-2 placeholder:font-[Montserrat] placeholder:font-medium tablet:m-1 mobile:w-[98%] mobile:my-2"
                  />
                  <button className=" bg-[#6C73F3] text-white py-2.5 px-6 font-[600] text-xs font-[Montserrat] rounded-lg tablet:px-4 mobile:w-[98%] mobile:m-1 ">
                    SEARCH
                  </button>
                </div>
              </div>
              <div id="four" className="w-[83%] mx-auto ">
                <div className="w-full flex align-center justify-between mobile:flex-col">
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2">
                    <img src="/assets/Rectangle 16.svg" alt="" />
                    <h2 className="mt-2 font-bold">FORTNITE</h2>
                    <p className="font-[Poppins] font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <a className="font-[Poppins] font-medium" href="">Know More</a>
                  </div>
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2">
                    <img src="/assets/Rectangle 17.svg" alt="" />
                    <h2 className="mt-2 font-bold">GOD OF WAR</h2>
                    <p className="font-[Poppins] font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <a className="font-[Poppins] font-medium" href="">Know More</a>
                  </div>
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2">
                    <img src="/assets/Rectangle 18.svg" alt="" />
                    <h2 className="mt-2 font-bold">APEX LEGENDS</h2>
                    <p className="font-[Poppins] font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <a className="font-[Poppins] font-medium" href="">Know More</a>
                  </div>
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2">
                    <img src="/assets/Rectangle 19.svg" alt="" />
                    <h2 className="mt-2 font-bold">DEAD CELLS</h2>
                    <p className="font-[Poppins] font-medium"> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <a className="font-[Poppins] font-medium" href="">Know More</a>
                  </div>
                </div>
                <div className="w-full flex align-center justify-between mt-4 mobile:flex-col">
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2">
                    <img src="/assets/Rectangle 20.svg" alt="" />
                    <h2 className="mt-2 font-bold">BATMAN ARKHAM CITY</h2>
                    <p className="font-[Poppins] font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <a className="font-[Poppins] font-medium" href="">Know More</a>
                  </div>
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2">
                    <img src="/assets/Rectangle 21.svg" alt="" />
                    <h2 className="mt-2 font-bold">BISHOK THE COLLECTION</h2>
                    <p className="font-[Poppins] font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <a className="font-[Poppins] font-medium" href="">Know More</a>
                  </div>
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2">
                    <img src="/assets/Rectangle 22.svg" alt="" />
                    <h2 className="mt-2 font-bold tablet:mb-4">DEVIL MAY CRY 5</h2>
                    <p className="font-[Poppins] font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <a className="font-[Poppins] font-medium" href="">Know More</a>
                  </div>
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2">
                    <img src="/assets/Rectangle 23.svg" alt="" />
                    <h2 className="mt-2 font-bold">ASSASINS CREED ODYSSEY</h2>
                    <p className="font-[Poppins] font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <a className="font-[Poppins] font-medium" href="">Know More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#6E3FAB] h-20 my-4 p-4">
          <div className="container mx-auto max-w-[1200px]">
            <center>
              <div className="w-[35%]  flex align-center justify-evenly mobile:w-[80%] mobile:text-xs mobile:ml-4 tablet:w-[40%] tablet:text-[10px] " >
                <button className="font-[Montserrat] font-medium border border-white rounded-lg p-1 px-3 text-xs text-white tablet:text-[10px] tablet:px-2">
                  PREVIOUS
                </button>
                <button className=" font-[Montserrat] font-semibold text-xs p-3 rounded-lg px-4 text-black bg-[#EFCB0E] tablet:text-[10px] tablet:px-2 tablet:p-2">
                  NEXT
                </button>
                <button className=" font-[Poppins] bg-[#D9D9D9] rounded-lg my-1 px-3 tablet:px-2">
                  1
                </button>
                <button className="font-[Poppins] bg-[#D9D9D9] rounded-lg my-1  px-3 bg-opacity-25 tablet:px-2">
                  2
                </button>
                <button className="font-[Poppins] bg-[#D9D9D9] rounded-lg my-1 px-3 bg-opacity-25 tablet:px-2">
                  3
                </button>
                <button className="font-[Poppins] bg-[#D9D9D9] rounded-lg my-1 px-3 bg-opacity-25 tablet:px-2">
                  4
                </button>
                <button className="font-[Poppins] bg-[#D9D9D9] rounded-lg my-1 px-3 bg-opacity-25 tablet:px-2">
                  5
                </button>
                <button className="font-[Poppins] bg-[#D9D9D9] rounded-lg my-1 px-3 bg-opacity-25 tablet:px-2">
                  6
                </button>
              </div>
            </center>
          </div>
        </div>
        <div className="w-full flex align-center justify-center ">
          <div className="container mx-auto max-w-[1200px]">
            
            <div className="w-[100%] p-6">
              <div className="w-[60%] p-2 mx-auto flex align-center justify-center flex-col tablet:w-[75%] mobile:w-[85%] ">
                <h2 className="mx-auto font-[Montserrat] font-bold tablet:text-sm">
                  GAME ACCESORIES
                </h2>
                <p className="mx-auto my-1 font-[Poppins] font-medium text-sm text-[#666666] tablet:text-xs">
                  GameQuest - Discover, Pland Conquer the Best Games of the
                  Decade!
                </p>
                <div className="w-full">
                  <div className="flex align-center justify-between font-semibold w-full py-2 text-[10px] font-bold font-[Montserrat] text-[#413600] mobile:flex-col tablet:w-[110%]  tablet:m-1 tablet:ml-[-20px] tablet:text-[8px] tablet:gap-2 ">
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-1 mobile:w-[75%]  mobile:mx-auto">
                      MOUSE
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-1 mobile:w-[75%]  mobile:mx-auto">
                      KEYBOARD
                    </button>
                    <button className="text-white bg-[#EFCB0E]  p-2 rounded-lg mobile:m-1 mobile:w-[75%]  mobile:mx-auto">
                      GAMING HEADSET
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-1 mobile:w-[75%]  mobile:mx-auto">
                      GAMING CONTROLLER
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-1 mobile:w-[75%]  mobile:mx-auto">
                      MONITOR
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-1 mobile:w-[75%]  mobile:mx-auto">
                      CHAIRS
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-1 mobile:w-[75%]  mobile:mx-auto">
                      SPEAKERS
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-1 mobile:w-[75%]  mobile:mx-auto">
                      WEBCAM
                    </button>
                  </div>
                  <div className="flex align-center justify-between w-[95%] mx-auto text-[10px] font-bold font-[Montserrat] text-[#413600] mobile:flex-col  mobile:m-0 mobile:w-full tablet:w-full tablet:p-0 tablet:text-[8px]">
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-1 mobile:w-[83%]  mobile:mx-6   tablet:m-1">
                      JOYSTICK
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2 mobile:w-[83%]  mobile:mx-6  tablet:m-1">
                      GLASSES
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2 mobile:w-[83%]  mobile:mx-6  tablet:m-1">
                      VR HEADSET
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2 mobile:w-[83%]  mobile:mx-6  tablet:m-1">
                      ROUTER
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2 mobile:w-[83%]  mobile:mx-6  tablet:m-1">
                      MICROPHONE
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2 mobile:w-[83%]  mobile:mx-6  tablet:m-1">
                      CABLE MANAGEMENT
                    </button>
                    <button className="border border-[#F0E7B8] p-2 rounded-lg mobile:m-2 mobile:w-[83%]  mobile:mx-6  tablet:m-1">
                      SURGE PROTECTOR
                    </button>
                  </div>
                </div>
                <div className="mx-auto my-4 w-auto relative mobile:w-[90%]">
                <img src="/assets/Vector (24).svg" className="w-3 absolute top-5 left-4 mobile:top-5" alt="" />
                  <input
                    id="input1"
                    type="text"
                    placeholder="SEARCH FOR GAMES"
                    className="border border-black m-2 rounded-lg p-1 px-3 placeholder:p-4 mobile:w-[95%] mobile:my-2 "
                  />
                  <button className=" bg-[#6C73F3] text-white py-2.5 px-6 font-[600] text-xs font-[Montserrat] rounded-lg  mobile:w-[95%] mobile:m-1 mobile:ml-2">
                    SEARCH
                  </button>
                </div>
              </div>
              <div className="w-[86%] mx-auto tablet:w-[82%] ">
                <div className="w-full flex align-center justify-between mobile:flex-col ">
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2">
                    <img src="/assets/Component 21.svg" alt="" />
                    <h2 className="mt-2 font-[Montserrat] text-xs mb-4 font-bold">
                      WHITE & ORANGE HEADPHONE
                    </h2>
                    <p className="font-[Poppins] text-[11px] my-2 font-medium text-[#666666] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <div className="flex align-center justify-between font-semibold px-1 w-full ">
                      <h2 className="font-[Montserrat]  tablet:text-[12px]">$100.99</h2>
                      <button className="font-[Montserrat] border border-black rounded-lg text-[#413600] text-[10px] font-bold p-2 px-3 tablet:text-[9px] tablet:p-1">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2">
                    <img src="/assets/Component 22.svg" alt="" />
                    <h2 className="mt-2 font-[Montserrat] mb-4 text-xs font-bold">
                      GREEN & BLACK HEADPHONE
                    </h2>
                    <p className="font-[Poppins] text-[11px] my-2 font-medium text-[#666666]  ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <div className="flex align-center justify-between font-semibold px-1 w-full">
                      <h2 className="font-[Montserrat]   tablet:text-[12px]">$100.99</h2>
                      <button className="font-[Montserrat] border border-black rounded-lg text-[#413600] text-[10px] font-bold p-2 px-3 tablet:text-[9px] tablet:p-1">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2 tablet:h-auto">
                    <img src="/assets/Component 23.svg" alt="" />
                    <h2 className="mt-1 font-[Montserrat] text-xs font-bold tablet:mt-2 tablet:mb-3">
                      FERRARI SPECIAL EDITION HEAD...
                    </h2>
                    <p className="font-[Poppins] text-[11px] my-2 font-medium text-[#666666]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <div className="flex align-center justify-between font-semibold px-1 w-full">
                      <h2 className="font-[Montserrat]   tablet:text-[12px]">$100.99</h2>
                      <button className="font-[Montserrat] border border-black rounded-lg text-[#413600] text-[10px] font-bold p-2 px-3 tablet:text-[9px] tablet:p-1">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2">
                    <img src="/assets/Component 24.svg" alt="" />
                    <h2 className="mt-2 font-[Montserrat] mb-4 text-xs font-bold">
                      PINK AND BLUE HEADPHONE
                    </h2>
                    <p className="font-[Poppins] text-[11px] my-2 font-medium text-[#666666]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <div className="flex align-center justify-between font-semibold w-full">
                      <h2 className="font-[Montserrat]   tablet:text-[12px]">$100.99</h2>
                      <button className="font-[Montserrat] border border-black rounded-lg text-[#413600] text-[10px] font-bold p-2 px-3 tablet:text-[9px] tablet:p-1">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full flex align-center justify-between mt-4 mobile:flex-col ">
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2">
                    <img src="/assets/Component 32.svg" alt="" />
                    <h2 className="mt-2 font-[Montserrat] text-xs font-bold">
                      PURE GAMING HEADPHONE
                    </h2>
                    <p className="font-[Poppins] text-[11px] my-2 font-medium text-[#666666]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <div className="flex align-center justify-between font-semibold px-1 w-full">
                      <h2 className="font-[Montserrat]   tablet:text-[12px]">$100.99</h2>
                      <button className="font-[Montserrat] border border-black rounded-lg text-[#413600] text-[10px] font-bold p-2 px-3 tablet:text-[9px] tablet:p-1">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2 tablet:h-auto">
                    <img src="/assets/Component 31.svg" alt="" />
                    <h2 className="mt-2 font-[Montserrat] text-xs font-bold tablet:mb-5">
                      COMFY HEADPHONE
                    </h2>
                    <p className="font-[Poppins] text-[11px] my-2 font-medium text-[#666666]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <div className="flex align-center justify-between font-semibold px-1 w-full">
                      <h2 className="font-[Montserrat] tablet:text-[12px]">$100.99</h2>
                      <button className="font-[Montserrat] border border-black rounded-lg text-[#413600] text-[10px] font-bold p-2 px-3 tablet:text-[9px] tablet:p-1">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2">
                    <img src="/assets/Component 30.svg" alt="" />
                    <h2 className="mt-2 font-[Montserrat] text-xs font-bold tablet:mb-5">
                      SONY HEADPHONE
                    </h2>
                    <p className="font-[Poppins] text-[11px] my-2 font-medium text-[#666666]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <div className="flex align-center justify-between font-semibold px-1 w-full">
                      <h2 className="font-[Montserrat] tablet:text-[12px]">$100.99</h2>
                      <button className="font-[Montserrat] border border-black rounded-lg text-[#413600] text-[10px] font-bold p-2 px-3 tablet:text-[9px] tablet:p-1">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                  <div className="w-1/4 px-2 mobile:w-full mobile:m-2">
                    {/* <img src="/assests/Group 20.svg" alt="" /> */}
                    <img src="/assets/Component 29.svg" alt="" />
                    <h2 className="mt-2 font-[Montserrat] text-xs font-bold ">
                      PURE BLACK HEADPHONE
                    </h2>
                    <p className="font-[Poppins] text-[11px] my-2 font-medium text-[#666666] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc non maximus tortor.
                    </p>
                    <div className="flex align-center justify-between font-semibold px-1 w-full">
                      <h2 className="font-[Montserrat] tablet:text-[12px]">$100.99</h2>
                      <button className="font-[Montserrat] border border-black rounded-lg text-[#413600] text-[10px] font-bold p-2 px-3 tablet:text-[9px] tablet:p-1">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#6E3FAB] h-20 my-4 p-4">
          <div className="container mx-auto max-w-[1200px]">
            <center>
              <div className="w-[35%]  flex align-center justify-evenly  tablet:w-[40%] tablet:text-[10px] mobile:w-[80%] mobile:text-xs mobile:ml-4 ">
                <button className="font-[Montserrat] border font-medium border-white rounded-lg p-1 px-3 text-xs text-white  tablet:px-2 tablet:text-[10px]">
                  PREVIOUS
                </button>
                <button className=" font-[Montserrat] font-semibold text-xs p-3 rounded-lg px-4 text-black bg-[#EFCB0E] tablet:text-[9px] tablet:px-2 tablet:p-2">
                  NEXT
                </button>
                <button className=" font-[Poppins] bg-[#D9D9D9] rounded-lg my-1 px-3 tablet:px-2">
                  1
                </button>
                <button className="font-[Poppins] bg-[#D9D9D9] rounded-lg my-1  px-3 bg-opacity-25 tablet:px-2">
                  2
                </button>
                <button className="font-[Poppins] bg-[#D9D9D9] rounded-lg my-1 px-3 bg-opacity-25 tablet:px-2">
                  3
                </button>
                <button className="font-[Poppins] bg-[#D9D9D9] rounded-lg my-1 px-3 bg-opacity-25 tablet:px-2">
                  4
                </button>
                <button className="font-[Poppins] bg-[#D9D9D9] rounded-lg my-1 px-3 bg-opacity-25 tablet:px-2">
                  5
                </button>
                <button className="font-[Poppins] bg-[#D9D9D9] rounded-lg my-1 px-3 bg-opacity-25 tablet:px-2">
                  6
                </button>
              </div>
            </center>
          </div>
        </div>
        <div className="w-full p-6 py-10 my-8 bg-[#111010]">
          <div className="container mx-auto max-w-[1200px] ">
            <center>
              <div className="w-[54%] p-0 flex align-center justify-around mobile:flex-col tablet:w-[70%] tablet:ml-6 mobile:ml-0 mobile:w-[80%] ">
                <div className="w-1/2 mobile:w-full tablet:w-[30%]">
                  <img
                    className="w-49 opacity-70"
                    src="/assets/Clip path group.svg"
                    alt=""
                  />
                </div>
                <div className="text-white my-auto ml-0  w-1/2 mobile:w-full mobile:ml-3 tablet:w-[65%] tablet:ml-[-10px]">
                  <div className="text-start ml-[-30px] tablet:ml-0">
                    <h1 className="font-[Montserrat] text-lg font-semibold tablet:text-md tablet:w-full mobile:text-sm mobile:mt-2">
                      SIGNUP FOR OUR NEWSLETTER
                    </h1>
                    <p className="text-xs font-[Poppins] text-[#B7BBC0] font-medium tablet:text-[11px] mobile:text-[10px]">
                      Stay in the loop with everything you need to know.
                    </p>
                  </div>
                  <div className="mt-6 ml-[-30px] text-start font-medium   tablet:mt-4 tablet:ml-0">
                    <input
                      type="text"
                      className="rounded-md p-2 placeholder:font-[Poppins] placeholder:font-medium placeholder:text-xs  tablet:w-[60%] tablet:p-1"
                      placeholder="Enter your email"
                    />
                    <button className="bg-[#CAAC0F] m-2 p-2 rounded-md text-black font-medium text-md font-[Poppins] tablet:p-1 tablet:text-sm">
                      Subscribe
                    </button>
                    <p className="text-xs font-[Poppins] text-[#556987] p-1 gap-2 mobile:text-[11px]">
                      We care about your data in our 
                      <a href="" className="text-[#CAAC0F] ">
                         privacy policy
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
        <div className="w-full h-48 bg-[#221F26] py-6 my-2">
          <div className="container mx-auto max-w-[1200px]">
            <div className="w-1/2 h-36 mx-auto text-white  flex align-center justify-evenly flex-col tablet:w-full">
              <img className="w-32 mx-auto" src="/assets/Group 20.svg" alt="" />
              <ul className="flex align-center justify-between text-xs font-[600] font-[Montserrat] mobile:w-[80%] mobile:text-[9px] tablet:w-[60%] tablet:text-[11px] tablet:mx-auto">
                <li>PRODUCT</li>
                <li>FEATURES</li>
                <li>PRICING</li>
                <li>RESOURCES</li>
                <li>CAREERS</li>
                <li>HELP</li>
                <li>PRIVACY</li>
              </ul>
              <p className="text-center font-[Poppins] font-[300] text-xs tablet:text-[11px]">
                Designed New Tech Fusion Cyber Tech
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
