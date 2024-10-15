import { doctor1Image, doctor2Image, doctor3Image } from "@/assets/images";
import {
  AIColorIcon,
  AmbulatoryIcon,
  BabyIcon,
  BodyIcon,
  BoneIcon,
  CalendarBlueIcon,
  ClinicalIcon,
  DoctorIcon,
  Logo2SVG,
  MedicinesWhiteIcon,
  PregnantIcon,
  TestTubeIcon,
  TestTubeWhiteIcon,
  XrayWhiteIcon,
} from "@/assets/svg";

export const dataDate = [
  {
    key: 1,
    date: "09/12",
    text: "Hôm nay",
  },
  {
    key: 2,
    date: "10/12",
    text: "Ngày mai",
  },
  {
    key: 3,
    date: "11/12",
    text: "Ngày kia",
  },
  {
    key: 4,
    text: "Ngày khác",
  },
];

export const dataTime = [
  {
    key: 1,
    time: "07:00 - 07:30",
    text: "Hôm nay",
  },
  {
    key: 2,
    time: "07:30 - 08:00",
    text: "Ngày mai",
  },
  {
    key: 3,
    time: "08:00 - 08:30",
    text: "Ngày kia",
  },
  {
    key: 4,
    time: "08:30 - 09:00",
  },
  {
    key: 5,
    time: "09:00 - 09:30",
  },
  {
    key: 6,
    time: "09:30 - 10:00",
  },
];

export const dataHealthConditions = [
  { value: "headache", label: "Đau đầu" },
  { value: "fever", label: "Sốt" },
  { value: "cough", label: "Ho" },
  { value: "sore_throat", label: "Đau họng" },
  { value: "fatigue", label: "Mệt mỏi" },
  { value: "nausea", label: "Buồn nôn" },
  { value: "vomiting", label: "Nôn mửa" },
  { value: "diarrhea", label: "Tiêu chảy" },
  { value: "chest_pain", label: "Đau ngực" },
  { value: "shortness_of_breath", label: "Khó thở" },
  { value: "dizziness", label: "Chóng mặt" },
  { value: "back_pain", label: "Đau lưng" },
  { value: "abdominal_pain", label: "Đau bụng" },
  { value: "rash", label: "Phát ban" },
  { value: "joint_pain", label: "Đau khớp" },
  { value: "muscle_pain", label: "Đau cơ" },
  { value: "insomnia", label: "Mất ngủ" },
  { value: "anxiety", label: "Lo âu" },
  { value: "depression", label: "Trầm cảm" },
];

export const dataMedicalSpecialties = [
  { value: "cardiology", label: "Tim mạch", icon: BoneIcon },
  { value: "neurology", label: "Thần kinh", icon: PregnantIcon },
  { value: "dermatology", label: "Da liễu", icon: BabyIcon },
  { value: "gastroenterology", label: "Tiêu hoá", icon: BoneIcon },
  { value: "endocrinology", label: "Nội tiết", icon: PregnantIcon },
  { value: "pediatrics", label: "Nhi khoa", icon: BabyIcon },
  { value: "orthopedics", label: "Chấn thương chỉnh hình", icon: BoneIcon },
  { value: "gynecology", label: "Phụ khoa", icon: PregnantIcon },
  { value: "urology", label: "Tiết niệu", icon: BabyIcon },
  { value: "psychiatry", label: "Tâm thần học", icon: BoneIcon },
  { value: "oncology", label: "Ung bướu", icon: PregnantIcon },
  { value: "ophthalmology", label: "Mắt", icon: BabyIcon },
  { value: "otolaryngology", label: "Tai mũi họng", icon: BoneIcon },
  { value: "dentistry", label: "Răng hàm mặt", icon: PregnantIcon },
  { value: "pulmonology", label: "Hô hấp", icon: BabyIcon },
  { value: "nephrology", label: "Thận học", icon: BoneIcon },
  { value: "rheumatology", label: "Thấp khớp", icon: PregnantIcon },
  { value: "hematology", label: "Huyết học", icon: BabyIcon },
  { value: "infectious_disease", label: "Truyền nhiễm", icon: BoneIcon },
];

export const dataDoctors = [
  {
    value: "dr_nguyen_van_a",
    label: "Bác sĩ Nguyễn Văn A",
    image: doctor1Image,
    department: "cardiology",
    departmentLabel: "Tim mạch",
  },
  {
    value: "dr_tran_thi_b",
    label: "Bác sĩ Trần Thị B",
    image: doctor2Image,
    department: "neurology",
    departmentLabel: "Thần kinh",
  },
  {
    value: "dr_le_van_c",
    label: "Bác sĩ Lê Văn C",
    image: doctor3Image,
    department: "dermatology",
    departmentLabel: "Da liễu",
  },
  {
    value: "dr_nguyen_thi_d",
    label: "Bác sĩ Nguyễn Thị D",
    image: doctor1Image,
    department: "gastroenterology",
    departmentLabel: "Tiêu hóa",
  },
  {
    value: "dr_phan_van_e",
    label: "Bác sĩ Phan Văn E",
    image: doctor2Image,
    department: "endocrinology",
    departmentLabel: "Nội tiết",
  },
  {
    value: "dr_hoang_thi_f",
    label: "Bác sĩ Hoàng Thị F",
    image: doctor3Image,
    department: "pediatrics",
    departmentLabel: "Nhi khoa",
  },
  {
    value: "dr_pham_van_g",
    label: "Bác sĩ Phạm Văn G",
    image: doctor1Image,
    department: "orthopedics",
    departmentLabel: "Chấn thương chỉnh hình",
  },
  {
    value: "dr_ngo_thi_h",
    label: "Bác sĩ Ngô Thị H",
    image: doctor2Image,
    department: "gynecology",
    departmentLabel: "Phụ khoa",
  },
  {
    value: "dr_truong_van_i",
    label: "Bác sĩ Trương Văn I",
    image: doctor3Image,
    department: "urology",
    departmentLabel: "Tiết niệu",
  },
  {
    value: "dr_ngo_van_k",
    label: "Bác sĩ Ngô Văn K",
    image: doctor1Image,
    department: "psychiatry",
    departmentLabel: "Tâm thần học",
  },
  {
    value: "dr_bui_thi_l",
    label: "Bác sĩ Bùi Thị L",
    image: doctor2Image,
    department: "oncology",
    departmentLabel: "Ung bướu",
  },
  {
    value: "dr_tran_van_m",
    label: "Bác sĩ Trần Văn M",
    image: doctor3Image,
    department: "ophthalmology",
    departmentLabel: "Mắt",
  },
  {
    value: "dr_dang_thi_n",
    label: "Bác sĩ Đặng Thị N",
    image: doctor1Image,
    department: "otolaryngology",
    departmentLabel: "Tai mũi họng",
  },
  {
    value: "dr_le_thi_o",
    label: "Bác sĩ Lê Thị O",
    image: doctor2Image,
    department: "dentistry",
    departmentLabel: "Răng hàm mặt",
  },
  {
    value: "dr_pham_van_p",
    label: "Bác sĩ Phạm Văn P",
    image: doctor3Image,
    department: "pulmonology",
    departmentLabel: "Hô hấp",
  },
  {
    value: "dr_nguyen_thi_q",
    label: "Bác sĩ Nguyễn Thị Q",
    image: doctor1Image,
    department: "nephrology",
    departmentLabel: "Thận học",
  },
  {
    value: "dr_hoang_van_r",
    label: "Bác sĩ Hoàng Văn R",
    image: doctor3Image,
    department: "rheumatology",
    departmentLabel: "Thấp khớp",
  },
];

export const dataClinics = [
  { value: "clinic_1", label: "Phòng khám Đa khoa Quốc tế" },
  { value: "clinic_2", label: "Phòng khám Đa khoa Hoàn Mỹ" },
  { value: "clinic_3", label: "Phòng khám Đại học Y Dược" },
  { value: "clinic_4", label: "Phòng khám Nhi đồng Thành phố" },
  { value: "clinic_5", label: "Phòng khám Bạch Mai" },
  { value: "clinic_6", label: "Phòng khám Tai Mũi Họng Trung Ương" },
  { value: "clinic_7", label: "Phòng khám Da liễu Hà Nội" },
  { value: "clinic_8", label: "Phòng khám Sản phụ khoa An Khang" },
  { value: "clinic_9", label: "Phòng khám Mắt Sài Gòn" },
  { value: "clinic_10", label: "Phòng khám Chấn thương chỉnh hình Thành phố" },
  { value: "clinic_11", label: "Phòng khám Đông y Vạn An" },
  { value: "clinic_12", label: "Phòng khám Răng Hàm Mặt Việt Pháp" },
];

export const dataMenu = [
  {
    key: 1,
    label: "Đặt khám",
  },
  {
    key: 2,
    label: "Hồ sơ sức khoẻ",
  },
  {
    key: 3,
    label: "Hỏi đáp y tế",
  },
];

export const dataMenu2 = [
  {
    key: 1,
    label: "Trang chủ",
  },
  {
    key: 2,
    label: "Đặt khám",
  },
  {
    key: 3,
    label: "Hồ sơ sức khoẻ",
  },
  {
    key: 4,
    label: "Hỏi đáp y tế",
  },
  {
    key: 5,
    label: "Quản lý tài liệu",
  },
];

export const dataServiceList = [
  {
    key: 1,
    label: "Đặt khám tại phòng khám",
    desc: "It uses a dictionary of over 200 Latin words",
    icon: AmbulatoryIcon,
  },
  {
    key: 2,
    label: "Đặt dịch vụ xét nghiệm",
    desc: "It uses a dictionary of over 200 Latin words",
    icon: TestTubeIcon,
  },
  {
    key: 3,
    label: "Đặt khám gói sức khoẻ",
    desc: "It uses a dictionary of over 200 Latin words",
    icon: BodyIcon,
  },
  {
    key: 4,
    label: "Bác sĩ riêng của tôi",
    desc: "It uses a dictionary of over 200 Latin words",
    icon: DoctorIcon,
  },
  {
    key: 5,
    label: "Hỏi đáp y tế",
    desc: "It uses a dictionary of over 200 Latin words",
    icon: AIColorIcon,
  },
  {
    key: 6,
    label: "Hồ sơ sức khoẻ",
    desc: "It uses a dictionary of over 200 Latin words",
    icon: ClinicalIcon,
  },
];

export const dataHeroItems = [
  {
    key: 1,
    label: "Hồ sơ sức khoẻ",
    icon: ClinicalIcon,
  },
  {
    key: 2,
    label: "Đặt hẹn khám",
    icon: CalendarBlueIcon,
  },
  {
    key: 3,
    label: "Bác sĩ riêng của tôi",
    icon: DoctorIcon,
  },
  {
    key: 4,
    label: "Hỏi đáp y tế",
    icon: AIColorIcon,
  },
];

export const dataMyClinics = [
  {
    key: 1,
    label: "Phòng khám Đa khoa Việt Đức",
    address: "Số 10 Đai Linh, Trung Văn",
    icon: Logo2SVG,
    department: "Phòng khám chuyên khoa",
    space: "1.0 Km",
    time: "10:00 - 20:00",
    phone: "1900 1234",
  },
  {
    key: 2,
    label: "Phòng khám Đa khoa Vimmec",
    address: "Lô 22 số 35 Lê Văn Thiêm, Thanh Xuân, Hà Nội",
    icon: Logo2SVG,
    department: "Phòng khám đa khoa",
    space: "1.0 Km",
    time: "10:00 - 20:00",
    phone: "1900 1234",
  },
];

export const dataHealthStories = [
  {
    key: 1,
    colorIcon: "#35C4C4",
    icon: MedicinesWhiteIcon,
    title: "Dược phẩm ABC",
    desc: "It uses a dictionary of over 200 Latin words",
    link: "#",
  },
  {
    key: 2,
    colorIcon: "#FC9AA2",
    icon: TestTubeWhiteIcon,
    title: "Xét nghiệm",
    desc: "It uses a dictionary of over 200 Latin words",
    link: "#",
  },
  {
    key: 3,
    colorIcon: "#537AFD",
    icon: XrayWhiteIcon,
    title: "Chẩn đoán hình ảnh",
    desc: "It uses a dictionary of over 200 Latin words",
    link: "#",
  },
  {
    key: 4,
    colorIcon: "#FFC747",
    icon: TestTubeWhiteIcon,
    title: "Dược phẩm ABC",
    desc: "It uses a dictionary of over 200 Latin words",
    link: "#",
  },
  {
    key: 5,
    colorIcon: "#DD94FF",
    icon: TestTubeWhiteIcon,
    title: "Dược phẩm ABC",
    desc: "It uses a dictionary of over 200 Latin words",
    link: "#",
  },
];

export const dataMenuFooter = [
  {
    key: 1,
    title: "Dịch vụ y tế",
    menu: [
      {
        key: 1,
        label: "Đặt khám nhanh",
        link: "#",
      },
      {
        key: 2,
        label: "Đặt khám theo chuyên khoa",
        link: "#",
      },
      {
        key: 3,
        label: "Đặt khám theo bác sĩ",
        link: "#",
      },
      {
        key: 4,
        label: "Hỏi đáp y tế",
        link: "#",
      },
      {
        key: 5,
        label: "Bác sĩ tư vấn",
        link: "#",
      },
      {
        key: 6,
        label: "Hồ sơ sức khoẻ",
        link: "#",
      },
    ],
  },
  {
    key: 2,
    title: "Về chúng tôi",
    menu: [
      {
        key: 1,
        label: "Giới thiệu",
        link: "#",
      },
      {
        key: 2,
        label: "Điều khoản dịch vụ",
        link: "#",
      },
      {
        key: 3,
        label: "Chính sách bảo mật",
        link: "#",
      },
      {
        key: 4,
        label: "Quy định sử dụng",
        link: "#",
      },
    ],
  },
  {
    key: 3,
    title: "Hướng dẫn",
    menu: [
      {
        key: 1,
        label: "Cài đặt ứng dụng",
        link: "#",
      },
      {
        key: 2,
        label: "Đặt lịch khám",
        link: "#",
      },
      {
        key: 3,
        label: "Quy trình hoàn phí",
        link: "#",
      },
      {
        key: 4,
        label: "Câu hỏi thường gặp",
        link: "#",
      },
    ],
  },
];
