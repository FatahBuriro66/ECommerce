// import React from "react";
// import { Row, Col, Typography, Button, Space, Image } from "antd";
// import { motion } from "framer-motion";

// const Services = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex flex-col items-center"
//       >
//         <Typography.Title level={2} className="text-center mb-4">
//           Welcome to Your One-Stop Shop
//         </Typography.Title>
//         <Typography.Paragraph className="text-center px-4">
//           Explore a wide range of high-quality products, all conveniently
//           delivered to your doorstep. We offer a seamless shopping experience
//           with competitive prices and excellent customer service.
//         </Typography.Paragraph>
//         <Space direction="vertical" className="mt-8">
//           <Button type="primary" size="large" href="/products">
//             Browse Products
//           </Button>
//           <Button type="default" size="large">
//             Learn More
//           </Button>
//         </Space>
//       </motion.div>

//       <Row className="mt-16 px-4 sm:px-8">
//         <Col span={24} md={12}>
//           <div className="flex flex-col items-center space-y-4">
//             <Image
//               preview={false}
//               width={128}
//               src="https://picsum.photos/id/200/200"
//               alt="Product image"
//               className="rounded-full shadow-md"
//             />
//             <Typography.Title level={4} className="text-center">
//               Wide Selection
//             </Typography.Title>
//             <Typography.Text className="text-center text-gray-700">
//               Find everything you need, from daily essentials to unique gifts.
//             </Typography.Text>
//           </div>
//         </Col>
//         <Col span={24} md={12}>
//           <div className="flex flex-col items-center space-y-4">
//             <Image
//               preview={false}
//               width={128}
//               src="https://picsum.photos/id/201/200"
//               alt="Delivery image"
//               className="rounded-full shadow-md"
//             />
//             <Typography.Title level={4} className="text-center">
//               Fast Delivery
//             </Typography.Title>
//             <Typography.Text className="text-center text-gray-700">
//               Get your orders delivered quickly and conveniently.
//             </Typography.Text>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Services;

import React from "react";
import { Row, Col, Typography, Button, Space, Image } from "antd";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex flex-col items-center"
      >
        <Typography.Title level={2} className="text-center mb-4 text-4xl">
          Welcome to Your One-Stop Shop
        </Typography.Title>
        <Typography.Paragraph className="text-center px-4 text-lg">
          Explore a wide range of high-quality products, all conveniently
          delivered to your doorstep. We offer a seamless shopping experience
          with competitive prices and excellent customer service.
        </Typography.Paragraph>
        <Space direction="vertical" className="mt-8">
          <Button type="primary" size="large" href="/products">
            Browse Products
          </Button>
          <Button type="default" size="large">
            Learn More
          </Button>
        </Space>
      </motion.div>

      <Row className="mt-16 px-4 sm:px-8">
        <Col span={24} md={12}>
          <div className="flex flex-col items-center space-y-4">
            <Image
              preview={false}
              width={256} // Increase the width for a larger image
              src="https://picsum.photos/id/200/200"
              alt="Product image"
              className="rounded-full shadow-md w-full md:w-auto" // Adjust the width responsively
            />
            <Typography.Title level={4} className="text-center text-2xl">
              Wide Selection
            </Typography.Title>
            <Typography.Text className="text-center text-gray-700 text-lg">
              Find everything you need, from daily essentials to unique gifts.
            </Typography.Text>
          </div>
        </Col>
        <Col span={24} md={12}>
          <div className="flex flex-col items-center space-y-4">
            <Image
              preview={false}
              width={256} // Increase the width for a larger image
              src="https://picsum.photos/id/201/200"
              alt="Delivery image"
              className="rounded-full shadow-md w-full md:w-auto" // Adjust the width responsively
            />
            <Typography.Title level={4} className="text-center text-2xl">
              Fast Delivery
            </Typography.Title>
            <Typography.Text className="text-center text-gray-700 text-lg">
              Get your orders delivered quickly and conveniently.
            </Typography.Text>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
