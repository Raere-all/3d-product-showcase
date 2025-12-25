import fallDetection from "@/assets/project1.png";
import obstacleCar from "@/assets/project2.png";

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
    title: "Free Fall Detection System",
    topic: "Safety & Monitoring",
    shortDescription: "Advanced accelerometer-based fall detection for elderly care and industrial safety applications.",
    longDescription: "Our Free Fall Detection System utilizes cutting-edge MEMS accelerometer technology combined with intelligent algorithms to detect sudden falls in real-time. The system immediately alerts caregivers or emergency services, potentially saving lives in critical situations. Perfect for elderly care facilities, industrial workplaces, and personal safety applications.",
    specifications: [
      { label: "Sensor Type", value: "MPU6050 6-Axis" },
      { label: "Response Time", value: "< 100ms" },
      { label: "Accuracy", value: "98.5%" },
      { label: "Power Supply", value: "5V DC" },
      { label: "Communication", value: "WiFi / BLE" },
      { label: "Battery Life", value: "72 Hours" },
    ],
    image: fallDetection,
    price: "$149.99"
  },
  {
    id: 2,
    title: "Obstacle Detection Car",
    topic: "Autonomous Systems",
    shortDescription: "Smart robotic vehicle with ultrasonic sensors for autonomous navigation and obstacle avoidance.",
    longDescription: "The Obstacle Detection Car is an intelligent robotic platform designed for autonomous navigation in complex environments. Equipped with multiple ultrasonic sensors and a powerful microcontroller, it can detect and avoid obstacles in real-time while maintaining optimal path efficiency. Ideal for educational purposes, research applications, and automated delivery systems.",
    specifications: [
      { label: "Sensors", value: "4x Ultrasonic HC-SR04" },
      { label: "Range", value: "2cm - 400cm" },
      { label: "Controller", value: "Arduino Mega" },
      { label: "Motors", value: "4x DC Geared" },
      { label: "Max Speed", value: "2 m/s" },
      { label: "Load Capacity", value: "5 kg" },
    ],
    image: obstacleCar,
    price: "$299.99"
  },
  {
    id: 3,
    title: "Smart Climate Monitor",
    topic: "Environmental Tech",
    shortDescription: "IoT-enabled environmental monitoring system for temperature, humidity, and air quality tracking.",
    longDescription: "The Smart Climate Monitor provides comprehensive environmental data collection with cloud connectivity. Track temperature, humidity, CO2 levels, and particulate matter in real-time through our intuitive dashboard. Perfect for smart homes, greenhouses, server rooms, and industrial facilities requiring precise climate control.",
    specifications: [
      { label: "Temp Range", value: "-40°C to 80°C" },
      { label: "Humidity", value: "0-100% RH" },
      { label: "CO2 Sensor", value: "MH-Z19B NDIR" },
      { label: "Connectivity", value: "WiFi 2.4GHz" },
      { label: "Display", value: "2.4\" TFT LCD" },
      { label: "Data Storage", value: "Cloud + SD Card" },
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    price: "$89.99"
  },
  {
    id: 4,
    title: "Gesture Control Module",
    topic: "Human Interface",
    shortDescription: "Touchless gesture recognition system for intuitive device control and smart home automation.",
    longDescription: "Experience the future of human-machine interaction with our Gesture Control Module. Using advanced infrared sensors and machine learning algorithms, it recognizes hand gestures with remarkable accuracy. Control your smart devices, presentations, or gaming systems without touching anything.",
    specifications: [
      { label: "Recognition", value: "12 Gestures" },
      { label: "Range", value: "5-15 cm" },
      { label: "Latency", value: "< 50ms" },
      { label: "Interface", value: "I2C / UART" },
      { label: "Voltage", value: "3.3V - 5V" },
      { label: "Current", value: "15mA Active" },
    ],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=400&fit=crop",
    price: "$59.99"
  },
  {
    id: 5,
    title: "Solar Power Station",
    topic: "Renewable Energy",
    shortDescription: "Portable solar charging system with intelligent power management and multiple output ports.",
    longDescription: "Harness the power of the sun with our Solar Power Station. Featuring high-efficiency monocrystalline panels and intelligent MPPT charging technology, it provides reliable off-grid power for camping, emergencies, or sustainable living. Multiple USB and DC outputs charge all your devices simultaneously.",
    specifications: [
      { label: "Panel Output", value: "100W Peak" },
      { label: "Battery", value: "288Wh LiFePO4" },
      { label: "USB Ports", value: "4x USB-A, 2x USB-C" },
      { label: "DC Output", value: "12V / 10A" },
      { label: "Charge Time", value: "4-6 Hours" },
      { label: "Cycles", value: "3000+" },
    ],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop",
    price: "$449.99"
  },
  {
    id: 6,
    title: "Biometric Lock System",
    topic: "Security Tech",
    shortDescription: "Multi-modal biometric authentication system combining fingerprint, face, and PIN verification.",
    longDescription: "Secure your premises with our state-of-the-art Biometric Lock System. Combining fingerprint scanning, facial recognition, and traditional PIN entry, it offers unparalleled security with convenient access. The anti-spoofing technology ensures only authorized users gain entry.",
    specifications: [
      { label: "Fingerprint", value: "500 DPI Optical" },
      { label: "Face Recognition", value: "3D Structured Light" },
      { label: "User Capacity", value: "100 Users" },
      { label: "False Rejection", value: "< 0.1%" },
      { label: "Power", value: "4x AA Batteries" },
      { label: "Backup", value: "Mechanical Key" },
    ],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop",
    price: "$199.99"
  },
];
