interface BlogData {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

export const blogdata: BlogData[] = [
  {
    image: "/Blogs/young-handsome-physician-medical-robe-with-stethoscope.jpg",
    title: "The Importance of Regular Dental Check-Ups",
    description:
      "Discover why routine dental visits are crucial for maintaining your oral health and preventing serious issues",
    tags: ["dental", "lifestyle", "hygiene"],
  },
  {
    image: "/Blogs/smiling-happy-gorgeous-young-woman.jpg",
    title: "Top Tips for Maintaining a Healthy Smile at Home",
    description:
      "Learn effective at-home care techniques to keep your teeth and gums in excellent condition between dental visits",
    tags: ["tooth", "health", "hygiene"],
  },
  {
    image: "/Blogs/full-shot-couple-doing-workout-exercises.jpg",
    title: "Understanding Fitness and Its Impact on Oral Health",
    description:
      "Explore the connection between physical fitness and oral health and how exercise can benefit your smile",
    tags: ["fitness", "health", "lifestyle"],
  },
];
