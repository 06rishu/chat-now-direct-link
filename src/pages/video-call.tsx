
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VideoCallPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the first step of the video call flow
    navigate("/video-call/welcome", { replace: true });
  }, [navigate]);

  return null;
};

export default VideoCallPage;
