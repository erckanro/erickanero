import { Box } from "@mui/material";

interface FloatingSphereProps {
  size: number;
  top: string;
  left: string;
  gradient: string;
}

const FloatingSphere: React.FC<FloatingSphereProps> = ({
  size,
  top,
  left,
  gradient,
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: size,
        height: size,
        top,
        left,
        background: gradient,
        borderRadius: "50%",
        filter: "blur(60px)",
      }}
    />
  );
};

export default FloatingSphere;
