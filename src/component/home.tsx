import { Box, Typography,Grid, Container } from "@mui/material";
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {

  return (
    <Container maxWidth="xl" sx={{
      padding: "50px 0", 
      marginTop: 13, 
      marginLeft: 20, 
      overflowX: "hidden", 
      borderRadius: "20px", 
    }}>
      
      {/* כותרת עמוד */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
          <Typography variant="h2" sx={{
            fontWeight: "bold", 
            color: "#fff", 
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"
          }}>
            Welcome to Your Photo World
          </Typography>
          <Typography variant="h4" sx={{
            color: "#f6d365", 
            marginTop: "20px", 
            fontWeight: 'bold',
            textShadow: "1px 1px 6px rgba(0, 0, 0, 0.4)"
          }}>
            Organize, share, and create amazing memories in one place😉.
          </Typography>
        </Box>
      </motion.div>

      {/* Grid עם תמונות ממבחר אלבומים */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <Box
              sx={{
                backgroundImage: 'url("/img/album1.jpg")',
                backgroundSize: 'cover',
                height: "300px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease-in-out",
                '&:hover': {
                  transform: "scale(1.05)", // אפקט של הגדלת התמונה במעבר עכבר
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)"
                }
              }}
            >
              <Typography variant="h5">Family Moments</Typography>
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <Box
              sx={{
                backgroundSize: 'cover',
                height: "300px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease-in-out",
                '&:hover': {
                  transform: "scale(1.05)", 
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)"
                }
              }}
            >
              <Typography variant="h5">Travel Adventures</Typography>
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <Box
              sx={{
                backgroundSize: 'cover',
                height: "300px",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
                boxShadow: "0 6px 18px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease-in-out",
                '&:hover': {
                  transform: "scale(1.05)", 
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)"
                }
              }}
            >
              <Typography variant="h5">Special Events</Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      {/* כפתורים אינטראקטיביים */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <Box sx={{ textAlign: "center", marginTop: "50px" }}>
         
        </Box>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <Box sx={{ textAlign: "center", marginTop: "70px" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff" }}>
            What Our Users Say
          </Typography>
          <Box sx={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: 3 }}>
            <Box sx={{ width: 300, padding: 2, border: "1px solid #ddd", borderRadius: "10px", backgroundColor: "#fff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <Typography sx={{ fontStyle: "italic" }}>
                "האפליקציה הזו הפכה את הארגון והשיתוף של תמונות המשפחה שלי לכל כך קלים ומהנים!"
              </Typography>
              <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>תמר פוטרמילך</Typography>
            </Box>
            <Box sx={{ width: 300, padding: 2, border: "1px solid #ddd", borderRadius: "10px", backgroundColor: "#fff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <Typography sx={{ fontStyle: "italic" }}>
                "אתר מטורף שווה מאוד להרשם"
              </Typography>
              <Typography sx={{ fontWeight: "bold", marginTop: "10px" }}>יאיר כהן</Typography>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default HomePage;
