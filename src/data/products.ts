import fallDetection from "@/assets/project1.png";
import obstacleCar from "@/assets/project2.png";
import smartGuard from "@/assets/project3.png";
import emergencyCampusBot from "@/assets/emergency-campus-bot.png";

export interface Product {
  id: number;
  title: string;
  topic: string;
  shortDescription: string;
  longDescription: string;
  specifications: {
    label: string;
    value: string;
  }[];
  image: string;
  price?: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Free Fall Detection\nSystem",
    topic: "Safety & Monitoring",
    shortDescription: "Advanced accelerometer-based fall detection for elderly care and industrial safety applications.",
    longDescription: "Our Free Fall Detection System utilizes cutting-edge MEMS accelerometer technology combined with intelligent algorithms to detect sudden falls in real-time. The system immediately alerts caregivers or emergency services, potentially saving lives in critical situations.",
    specifications: [
      { label: "Sensor Type", value: "MPU6050 6-Axis" },
      { label: "Response Time", value: "< 100ms" },
      { label: "Accuracy", value: "98.5%" },
      { label: "Power Supply", value: "5V DC" },
      { label: "Communication", value: "WiFi / BLE" },
    ],
    image: fallDetection,
    price: "$149.99"
  },
  {
    id: 2,
    title: "Obstacle Detection Car",
    topic: "Autonomous Systems",
    shortDescription: "Smart robotic vehicle with ultrasonic sensors for autonomous navigation and obstacle avoidance.",
    longDescription: "The Obstacle Detection Car is an intelligent robotic platform designed for autonomous navigation in complex environments. Equipped with multiple ultrasonic sensors and a powerful microcontroller, it can detect and avoid obstacles in real-time while maintaining optimal path efficiency.",
    specifications: [
      { label: "Sensors", value: "4x Ultrasonic HC-SR04" },
      { label: "Range", value: "2cm - 400cm" },
      { label: "Controller", value: "Arduino Mega" },
      { label: "Motors", value: "4x DC Geared" },
      { label: "Max Speed", value: "2 m/s" },
    ],
    image: obstacleCar,
    price: "$299.99"
  },
  {
    id: 3,
    title: "Smart Guard Sentinel",
    topic: "House Safety",
    shortDescription: "Intelligent home security robot with motion detection, surveillance camera, and automated patrol capabilities.",
    longDescription: "The Smart Guard Sentinel is an advanced home security solution that combines autonomous patrol, real-time video surveillance, and intelligent threat detection. It navigates your property automatically, alerting you instantly to any unusual activity while keeping your family safe.",
    specifications: [
      { label: "Camera", value: "1080p HD Night Vision" },
      { label: "Detection", value: "PIR + AI Motion" },
      { label: "Patrol Range", value: "50m Radius" },
      { label: "Battery", value: "12 Hours Active" },
      { label: "Alerts", value: "Push + Siren" },
    ],
    image: smartGuard,
    price: "$399.99"
  },
  {
    id: 4,
    title: "Emergency Campus Bot",
    topic: "Campus Safety",
    shortDescription: "Autonomous rescue robot with tank treads for navigating campus emergencies and providing rapid response assistance.",
    longDescription: "The Emergency Campus Bot is a rugged, all-terrain autonomous robot designed for campus safety and emergency response. Built with tank-style treads for maximum mobility, it can navigate stairs, rough terrain, and obstacles to reach emergency locations quickly. Equipped with sensors, cameras, and communication systems for real-time situational awareness.",
    specifications: [
      { label: "Chassis", value: "Tank Treads" },
      { label: "Sensors", value: "IR + Ultrasonic" },
      { label: "Camera", value: "720p Streaming" },
      { label: "Controller", value: "Arduino + ESP32" },
      { label: "Battery", value: "4 Hours Runtime" },
    ],
    image: emergencyCampusBot,
    price: "$549.99"
  },
];
