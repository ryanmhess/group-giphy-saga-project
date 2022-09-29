import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

function FavImageCard({ image }) {
    return (
        <div>
            <Card className="favImgCard" sx={{maxWidth: 500}}>
                <Typography>
                    GIPHY!
                </Typography>
                <CardContent>
                    <img src={image}></img>
                </CardContent>
            </Card>
        </div>
    );
}

export default FavImageCard;