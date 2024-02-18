import { useMediaQuery } from "react-responsive";
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineIcon, TimelineBody, Typography, Avatar } from "@material-tailwind/react";
import Navbar from "../components/Layouts/Navbar";
const Experience = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1225px)'
    });
    
    const isTablets = useMediaQuery({
        query: '(min-width: 769px) and (max-width: 1224px)'
    });
    
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });
    return (
        <>
            {isDesktopOrLaptop && 
                <div>
                    <Navbar/>
                    <div className="flex">
                        <div className="w-1/2 mx-10 mt-8">
                            <Timeline>
                                <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader>
                                    <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://docs.material-tailwind.com/img/team-1.jpg" alt="user 1" withBorder />
                                    </TimelineIcon>
                                    <Typography variant="h5" color="blue-gray">
                                    Timeline Title Here.
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="pb-8">
                                    <Typography color="gary" className="font-normal text-gray-600">
                                    The key to more success is to have a lot of pillows. Put it this way, it took me
                                    twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                    I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                    luv.
                                    </Typography>
                                </TimelineBody>
                                </TimelineItem>
                                <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader>
                                    <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://docs.material-tailwind.com/img/team-2.jpg" alt="user 2" withBorder />
                                    </TimelineIcon>
                                    <Typography variant="h5" color="blue-gray">
                                    Timeline Title Here.
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="pb-8">
                                    <Typography color="gary" className="font-normal text-gray-600">
                                    The key to more success is to have a lot of pillows. Put it this way, it took me
                                    twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                    I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                    luv.
                                    </Typography>
                                </TimelineBody>
                                </TimelineItem>
                                <TimelineItem>
                                <TimelineHeader>
                                    <TimelineIcon className="p-0">
                                    <Avatar size="sm" src="https://docs.material-tailwind.com/img/team-3.jpg" alt="user 3" withBorder />
                                    </TimelineIcon>
                                    <Typography variant="h5" color="blue-gray">
                                    Timeline Title Here.
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody>
                                    <Typography color="gary" className="font-normal text-gray-600">
                                    The key to more success is to have a lot of pillows. Put it this way, it took me
                                    twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                    I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                    luv.
                                    </Typography>
                                </TimelineBody>
                                </TimelineItem>
                            </Timeline>
                        </div>
                        <div className="w-1/2 mx-10 mt-8">
                        <Timeline>
                            <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                <Avatar size="sm" src="https://docs.material-tailwind.com/img/team-1.jpg" alt="user 1" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="blue-gray">
                                Timeline Title Here.
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography color="gary" className="font-normal text-gray-600">
                                The key to more success is to have a lot of pillows. Put it this way, it took me
                                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                luv.
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineConnector />
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                <Avatar size="sm" src="https://docs.material-tailwind.com/img/team-2.jpg" alt="user 2" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="blue-gray">
                                Timeline Title Here.
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody className="pb-8">
                                <Typography color="gary" className="font-normal text-gray-600">
                                The key to more success is to have a lot of pillows. Put it this way, it took me
                                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                luv.
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineHeader>
                                <TimelineIcon className="p-0">
                                <Avatar size="sm" src="https://docs.material-tailwind.com/img/team-3.jpg" alt="user 3" withBorder />
                                </TimelineIcon>
                                <Typography variant="h5" color="blue-gray">
                                Timeline Title Here.
                                </Typography>
                            </TimelineHeader>
                            <TimelineBody>
                                <Typography color="gary" className="font-normal text-gray-600">
                                The key to more success is to have a lot of pillows. Put it this way, it took me
                                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                luv.
                                </Typography>
                            </TimelineBody>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    </div>
                </div>
            }

            {isTablets && 
                <div>
                    <Navbar/>
                    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Website Under Construction</h1>
                        <p className="text-lg text-gray-600 mb-8">We are currently working on something awesome! Stay tuned for updates.</p>
                        <img src="/img/work-in-progress.png" alt="Under Construction" className="max-w-[150px]" />
                    </div>
                </div>
            }

            {isMobile && 
                <div>
                    <Navbar/>
                    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Website Under Construction</h1>
                        <p className="text-lg text-gray-600 mb-8">We are currently working on something awesome! Stay tuned for updates.</p>
                        <img src="/img/work-in-progress.png" alt="Under Construction" className="max-w-[150px]" />
                    </div>
                </div>
            }
        </>
    )
}


export default Experience;