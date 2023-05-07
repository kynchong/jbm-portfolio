// Import individual images
import imageOne from "../../public/gallery-items/00ecad155723113.Y3JvcCwxOTk5LDE1NjQsMCww.png";
import imageTwo from "../../public/gallery-items/06b46778899253.Y3JvcCw3NjksNjAxLDM2LDA.png";
import imageThree from "../../public/gallery-items/0718d7142633025.Y3JvcCw4MTAsNjMzLDAsMA.jpg";
import imageFour from "../../public/gallery-items/0c472f149992757.Y3JvcCwxNDQ4LDExMzMsMyww.jpg";
import imageFive from "../../public/gallery-items/0d90fe101239807.Y3JvcCwxNDk5LDExNzMsMCww.jpg";
import imageSix from "../../public/gallery-items/0f6d73167571959.Y3JvcCw4MDgsNjMyLDAsMA.png";
import imageSeven from "../../public/gallery-items/18b06d163845493.Y3JvcCwyODcwLDIyNDQsMCww.png";
import imageEight from "../../public/gallery-items/25b5f6108992125.Y3JvcCwyNTE1LDE5NjcsNDczLDIwNQ.jpg";
import imageNine from "../../public/gallery-items/25dddd146371989.Y3JvcCwxNDE0LDExMDYsMCww.png";
import imageTen from "../../public/gallery-items/2ab71c7146221.Y3JvcCwyNDI0LDE4OTYsMzAsMA.jpg";
import imageEleven from "../../public/gallery-items/320bad167716591.Y3JvcCw4MDgsNjMyLDAsMA.png";
import imageTwelve from "../../public/gallery-items/38eb8f52025485.Y3JvcCw4MDgsNjMyLDAsMA.jpg";
import imageThirteen from "../../public/gallery-items/3aaf0b118262189.Y3JvcCw4MDgsNjMyLDAsMA.jpg";
import imageFourteen from "../../public/gallery-items/3c897765140595.Y3JvcCwxMDcyLDgzOSwwLDA.jpg";
import imageFifteen from "../../public/gallery-items/40c64b154718933.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg";
import imageSixteen from "../../public/gallery-items/437871167884177.Y3JvcCwxOTE1LDE0OTgsNCww.jpg";
import imageSeventeen from "../../public/gallery-items/496a514321479.Y3JvcCwxMzk0LDEwOTEsMCww.jpg";
import imageEighteen from "../../public/gallery-items/4bcb9f108556007.Y3JvcCw4MDgsNjMyLDAsMA.png";
import imageNineteen from "../../public/gallery-items/4d172266720261.Y3JvcCwxMDgxLDg0Niw4LDA.jpg";
import imageTwenty from "../../public/gallery-items/50d3d0146627381.Y3JvcCwxMzgwLDEwODAsMjQ2LDA.png";
import imageTwentyOne from "../../public/gallery-items/538656122506969.Y3JvcCwxMzgwLDEwODAsMCww.jpg";
import imageTwentyTwo from "../../public/gallery-items/567ce5143977919.Y3JvcCwyMjE2LDE3MzQsMTAsMA.jpg";
import imageTwentyThree from "../../public/gallery-items/5a9d6951670867.Y3JvcCw4MTAsNjM0LDQsMA.jpg";
import imageTwentyFour from "../../public/gallery-items/5b69dc99630275.Y3JvcCw4MDgsNjMyLDAsMA.png";
import imageTwentyFive from "../../public/gallery-items/5de52c143969229.628d1db6955b9.jpg";
import imageTwentySix from "../../public/gallery-items/5eed8e143597353.Y3JvcCwxMDgwLDg0NSw1MywzNjY.jpeg";
import imageTwentySeven from "../../public/gallery-items/631d2d150256417.Y3JvcCwxMzc4LDEwNzgsMTIyLDIz.jpeg";
import imageTwentyEight from "../../public/gallery-items/69bdda165915797.Y3JvcCw4MDgsNjMyLDAsMA.jpg";
import imageTwentyNine from "../../public/gallery-items/6a98b7114703327.Y3JvcCw5OTIsNzc2LDQsMA.jpg";
import imageThirty from "../../public/gallery-items/6e4d38119619667.Y3JvcCw4MDgsNjMyLDAsMA.png";
import animatedOne from "../../public/gallery-items/NexusStudios_Cannes_2022_Winner_Final-1-1.gif";
import animatedTwo from "../../public/gallery-items/ezgifcom-gif-maker_1.b5ea41f1eb77.gif";
import animatedThree from "../../public/gallery-items/ezgifcom-gif-maker_1_copy.8424b05aff30.gif";
import animatedFour from "../../public/gallery-items/limelite.gif";

// import imageOne from "";

// type
export interface ImageCollection {
	id: number;
	src: any;
	alt: string;
}

// Store in variable
export const imagesCollection: Array<ImageCollection> = [
	{
		id: 0,
		src: imageOne,
		alt: "Image One",
	},
	{
		id: 1,
		src: imageTwo,
		alt: "Image Two",
	},
	{
		id: 2,
		src: imageThree,
		alt: "Image Three",
	},
	{
		id: 3,
		src: imageFour,
		alt: "Image Four",
	},
	{
		id: 4,
		src: imageFive,
		alt: "Image Five",
	},
	{
		id: 5,
		src: imageSix,
		alt: "Image Six",
	},
	{
		id: 6,
		src: imageSeven,
		alt: "Image Seven",
	},
	{
		id: 7,
		src: imageEight,
		alt: "Image Eight",
	},
	{
		id: 8,
		src: imageNine,
		alt: "Image Nine",
	},
	{
		id: 9,
		src: imageTen,
		alt: "Image Ten",
	},
	{
		id: 10,
		src: imageEleven,
		alt: "Image Eleven",
	},
	{
		id: 11,
		src: imageTwelve,
		alt: "Image Twelve",
	},
	{
		id: 12,
		src: imageThirteen,
		alt: "Image Thirteen",
	},
	{
		id: 13,
		src: imageFourteen,
		alt: "Image Fourteen",
	},
	{
		id: 14,
		src: imageFifteen,
		alt: "Image Fifteen",
	},
	{
		id: 15,
		src: imageSixteen,
		alt: "Image Sixteen",
	},
	{
		id: 16,
		src: imageSeventeen,
		alt: "Image Seventeen",
	},
	{
		id: 17,
		src: imageEighteen,
		alt: "Image Eighteen",
	},
	{
		id: 18,
		src: imageNineteen,
		alt: "Image Nineteen",
	},
	{
		id: 19,
		src: imageTwenty,
		alt: "Image Twenty",
	},
	{
		id: 20,
		src: imageTwentyOne,
		alt: "Image Twenty One",
	},
	{
		id: 21,
		src: imageTwentyTwo,
		alt: "Image Twenty Two",
	},
	{
		id: 22,
		src: imageTwentyThree,
		alt: "Image Twenty Three",
	},
	{
		id: 23,
		src: imageTwentyFour,
		alt: "Image Twenty Four",
	},
	{
		id: 24,
		src: imageTwentyFive,
		alt: "Image Twenty Five",
	},
	{
		id: 25,
		src: imageTwentySix,
		alt: "Image Twenty Six",
	},
	{
		id: 26,
		src: imageTwentySeven,
		alt: "Image Twenty Seven",
	},
	{
		id: 27,
		src: imageTwentyEight,
		alt: "Image Twenty Eight",
	},
	{
		id: 28,
		src: imageTwentyNine,
		alt: "Image Twenty Nine",
	},
	{
		id: 29,
		src: imageThirty,
		alt: "Image Thirty",
	},
	{
		id: 30,
		src: animatedOne,
		alt: "Gif One",
	},
	{
		id: 31,
		src: animatedTwo,
		alt: "Gif Two",
	},
	{
		id: 32,
		src: animatedThree,
		alt: "Gif Three",
	},
	{
		id: 33,
		src: animatedFour,
		alt: "Gif Four",
	},
];
