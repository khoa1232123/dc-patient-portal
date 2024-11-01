import { avatarImage } from "@/assets/images";
import {
  AIColorIcon,
  CameraIcon,
  ImageIcon,
  MoreIcon,
  PhoneIcon,
} from "@/assets/svg";
import { MinusOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ButtonCustom, InputCustom } from ".";

type Props = {};

const chatData = [
  {
    id: 1,
    sender: "chatbot",
    avatar: "https://example.com/avatar1.png",
    message: "Xin chào!",
    timestamp: "2024-11-01T09:00:00",
  },
  {
    id: 2,
    sender: "chatbot",
    avatar: "https://example.com/avatar2.png",
    message: `Tôi là trợ lý hỏi đáp thông tin chăm sóc sức khoẻ và y tế được phát triển trên công nghệ trí tuệ nhân tạo.`,
    timestamp: "2024-11-01T09:01:00",
  },
  {
    id: 3,
    sender: "chatbot",
    avatar: "https://example.com/avatar1.png",
    message: `Những thông tin mà chúng tôi cung cấp chỉ mang tính tham khảo và không có giá trị pháp lý. Nếu bạn có vấn đề sức khoẻ, hãy thăm khám với bác sĩ để được chẩn đoán và điều trị.`,
    timestamp: "2024-11-01T09:02:00",
  },
  {
    id: 4,
    sender: "chatbot",
    avatar: "https://example.com/avatar2.png",
    message: "Vui lòng đặt câu hỏi của bạn.",
    timestamp: "2024-11-01T09:03:00",
  },
];

const VirtualAssistant = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [startToChat, setStartToChat] = useState(false);
  const [messages, setMessages] = useState(chatData);
  const [form] = Form.useForm();
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].sender === "user"
    ) {
      setTimeout(() => {
        setMessages([
          ...messages,
          {
            id: messages.length + 1,
            sender: "chatbot",
            avatar: "https://example.com/avatar2.png",
            message:
              "Bạn vui lòng chờ trong giây lát, bác sĩ của chúng tôi sẽ liên hệ với bạn sớm nhất có thể!",
            timestamp: new Date().toISOString(),
          },
        ]);
      }, 500);
    }
  }, [messages]);

  useEffect(() => {
    // Scroll to bottom when open or messages change
    if (open && chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: chatBoxRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [open, messages]);

  const handleChatMessage = (values: any) => {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender: "user",
        avatar: "https://example.com/avatar2.png",
        message: values.message,
        timestamp: new Date().toISOString(),
      },
    ]);
    form.resetFields();
  };

  return (
    <div className={`virtual-assistant ${open ? "open" : ""}`}>
      <div className={`virtual-assistant__wrapper`}>
        <div className="virtual-assistant__header">
          <h3 className="virtual-assistant__header__title">
            Trợ lý ảo hỏi đáp sức khỏe
          </h3>
          <div className="virtual-assistant__header__right">
            <span className="virtual-assistant__header__phone">
              <PhoneIcon width={20} height={20} />
            </span>
            <Button
              className="virtual-assistant__header__btn"
              onClick={() => setOpen(false)}
              icon={<MinusOutlined />}
            />
          </div>
        </div>
        <div className="virtual-assistant__body" ref={chatBoxRef}>
          <div className="chat-box">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-box__message ${msg.sender}`}>
                {msg.sender === "chatbot" ? (
                  <AIColorIcon width={24} height={24} />
                ) : (
                  <Image
                    src={avatarImage}
                    alt="avatar"
                    width={24}
                    height={24}
                  />
                )}
                <div className="chat-box__message__content">
                  <p>{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Form form={form} className="w-full" onFinish={handleChatMessage}>
          <div className="virtual-assistant__footer">
            {startToChat ? (
              <>
                <ImageIcon className="virtual-assistant__footer__icon" />
                <CameraIcon className="virtual-assistant__footer__icon" />
                <InputCustom
                  className="virtual-assistant__footer__input"
                  placeholder="Nhập nội dung..."
                  name={"message"}
                />
                <MoreIcon className="virtual-assistant__footer__icon" />
              </>
            ) : (
              <ButtonCustom onClick={() => setStartToChat(true)}>
                Bắt đầu trò chuyên
              </ButtonCustom>
            )}
          </div>
        </Form>
      </div>
      <div
        className="virtual-assistant__btn"
        onClick={() => setOpen((prev) => !prev)}
      >
        <AIColorIcon width={41} height={41} />
      </div>
    </div>
  );
};

export default VirtualAssistant;
