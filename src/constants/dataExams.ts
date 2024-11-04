import {
  HeartRate01Image,
  HeartRate02Image,
  HeartRate03Image,
  doctor1Image,
  doctor2Image,
  doctor3Image,
} from "@/assets/images";
import {
  AIColorIcon,
  AmbulatoryIcon,
  AncvIcon,
  Baby2Icon,
  BabyIcon,
  BloodPressureIcon,
  BodyFatIcon,
  BodyHeightIcon,
  BodyIcon,
  BodyNormalIcon,
  BodyRunIcon,
  BoneIcon,
  CalendarBlueIcon,
  ClinicalIcon,
  DoctorIcon,
  HealthDataIcon,
  HeartIcon,
  Logo2SVG,
  MedicinesWhiteIcon,
  OdontologyIcon,
  PregnantIcon,
  SyringeVaccineIcon,
  TestTubeIcon,
  TestTubeWhiteIcon,
  VirusLabIcon,
  XrayWhiteIcon,
} from "@/assets/svg";

export const dataStatuses = [
  {
    key: "1",
    value: "waiting",
    label: "Chờ xác nhận",
  },
  {
    key: "2",
    value: "confirmed",
    label: "Đã xác nhận",
  },
  {
    key: "3",
    value: "complete",
    label: "Hoàn thành",
  },
];

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
    key: "/dat-kham",
    label: "Đặt khám",
    link: "/dat-kham",
  },
  {
    key: "/ho-so-suc-khoe",
    label: "Hồ sơ sức khoẻ",
    link: "#",
  },
  {
    key: "/hoi-dap-y-te",
    label: "Hỏi đáp y tế",
    link: "#",
  },
];

export const dataMenu2 = [
  {
    key: "/",
    label: "Trang chủ",
    link: "/",
  },
  {
    key: "/dat-kham",
    label: "Đặt khám",
    link: "/dat-kham",
  },
  {
    key: "/ho-so-suc-khoe",
    label: "Hồ sơ sức khoẻ",
    link: "/ho-so-suc-khoe",
  },
  {
    key: "/hoi-dap-y-te",
    label: "Hỏi đáp y tế",
    link: "#",
  },
  {
    key: "/quan-ly-tai-lieu",
    label: "Quản lý tài liệu",
    link: "/quan-ly-tai-lieu",
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

export const dataHealthIndexes: HealthIndexProps[] = [
  {
    key: "weight",
    title: "Cân nặng",
    value: "56.6",
    unit: "kg",
    desc: "Không có giá trị",
    icon: BodyFatIcon,
    path: "/ho-so-suc-khoe/chi-so-suc-khoe/can-nang",
    colorIcon: "#5591F8",
  },
  {
    key: "height",
    title: "Chiều cao",
    value: "168",
    unit: "cm",
    desc: "Không có giá trị",
    icon: BodyHeightIcon,
    path: "/ho-so-suc-khoe/chi-so-suc-khoe/chieu-cao",
    colorIcon: "#9355F8",
  },
  {
    key: "body-index",
    title: "Chỉ số cơ thể",
    value: "168",
    unit: "cm",
    desc: "Không có giá trị",
    icon: BodyNormalIcon,
    path: "/ho-so-suc-khoe/chi-so-suc-khoe/chi-so-co-the",
    colorIcon: "#FF9737",
  },
  {
    key: "heart-rate",
    title: "Nhịp tim",
    value: "168",
    unit: "BPM",
    desc: "Không có giá trị",
    icon: HeartIcon,
    path: "/ho-so-suc-khoe/chi-so-suc-khoe/nhip-tim",
    colorIcon: "#FF7F7F",
    moreData: {
      title: "Giới thiệu về nhịp tim",
      desc: `<p>Nhịp tim của bạn đập khoảng 100.000 lần mỗi ngày, tăng và giảm tốc độ trong các khoảng thời gian gắng sức và nghỉ ngơi. Nhịp tim là số làn mà tm của bạn đập trong mỗi phút và được sử dụng như là một chỉ báo về sức khoẻ tim mạch của bạn.</p>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>`,
      news: [
        {
          title: "Thể chất tim mạch thấp có ý nghĩa như thế nào",
          desc: "Và bạn có thể làm gì trong trường hợp đó",
          image: HeartRate01Image,
        },
        {
          title: "Tìm hiểu về thể chất tim mạch",
          desc: "Tìm hiểu xem nhịp tim cao hoặc thấp có ý nghĩa như thế nào ",
          image: HeartRate02Image,
        },
        {
          title: "Tìm hiểu về nhịp tim của bạn",
          desc: "Tìm hiểu xem nhịp tim cao hoặc thấp có ý nghĩa như thế nào ",
          image: HeartRate03Image,
        },
      ],
    },
  },
  {
    key: "activity",
    title: "Hoạt động",
    value: "10",
    unit: "Km",
    desc: "Không có giá trị",
    icon: BodyRunIcon,
    path: "/ho-so-suc-khoe/chi-so-suc-khoe/hoat-dong",
    colorIcon: "#78CCAE",
  },
];

export const dataMedicalHistory = [
  {
    key: "1",
    title: "Trung tâm xét nghiệm GreenLab",
    date: "15/03/2021",
    time: "13:30 - 14:00",
    user: "Tăng Thị Lương (tôi)",
    department: "Khám nội tổng quát",
    address: "35 Lê Văn Thiêm, Thanh Xuân, Hà Nội",
    status: "waiting",
  },
  {
    key: "2",
    title: "Trung tâm xét nghiệm GreenLab",
    date: "15/03/2021",
    time: "13:30 - 14:00",
    user: "Tăng Thị Lương (tôi)",
    department: "Khám nội tổng quát",
    address: "35 Lê Văn Thiêm, Thanh Xuân, Hà Nội",
    status: "confirmed",
  },
  {
    key: "3",
    title: "Trung tâm xét nghiệm GreenLab",
    date: "15/03/2021",
    time: "13:30 - 14:00",
    user: "Tăng Thị Lương (tôi)",
    department: "Khám nội tổng quát",
    address: "35 Lê Văn Thiêm, Thanh Xuân, Hà Nội",
    status: "complete",
  },
  {
    key: "4",
    title: "Trung tâm xét nghiệm GreenLab",
    date: "15/03/2021",
    time: "13:30 - 14:00",
    user: "Tăng Thị Lương (tôi)",
    department: "Khám nội tổng quát",
    address: "35 Lê Văn Thiêm, Thanh Xuân, Hà Nội",
    status: "waiting",
  },
];

export const dataClinicServiceList = [
  {
    key: "1",
    title: "Tiêm phòng Vaccine",
    colorPrimary: "#5CE1E6",
    colorSecond: "#5CE1E61A",
    icon: SyringeVaccineIcon,
    children: [
      "Tiêm phòng Vaccine Covid-19",
      "Tiêm phòng Vaccine Hepatitis B",
      "Tiêm phòng Vaccine Hepatitis C",
      "Tiêm phòng Vaccine SARS-CoV-2",
      "Tiêm phòng Vaccine Varicella",
      "Tiêm phòng Vaccine HIV",
    ],
  },
  {
    key: "2",
    title: "Nhi",
    colorPrimary: "#F48686",
    colorSecond: "#F486861A",
    icon: Baby2Icon,
    children: [
      "Khám trẻ đi học",
      "Khám nhi tổng quát",
      "Kiểm tra sức khoẻ sơ sinh",
      "Khám trẻ nhỏ",
      "Khám trẻ lớn (3 - 15 tuổi)",
      "Khám dị ứng và hen suyễn",
    ],
  },
  {
    key: "3",
    title: "Sản khoa",
    colorPrimary: "#FFCB13",
    colorSecond: "#FFCB131A",
    icon: AncvIcon,
    children: [
      "Khám sản khoa",
      "Điều trị bệnh",
      "Khám sản khoa chuyên khoa",
      "Thăm khám sản khoa",
      "Chẩn đoán bệnh",
      "Chăm sóc sức sau sinh",
    ],
  },
  {
    key: "4",
    title: "Xét nghiệm",
    colorPrimary: "#4065E7",
    colorSecond: "#4065E71A",
    icon: VirusLabIcon,
    children: [
      "Xét nghiệm tử thiết",
      "Xét nghiệm nội tổng quát",
      "Xét nghiệm máu",
      "Xét nghiệm sinh hoá",
      "Xét nghiệm sức khoẻ",
      "Xét nghiệm truyền nhiễm",
    ],
  },
  {
    key: "5",
    title: "Răng hàm mặt",
    colorPrimary: "#64B300",
    colorSecond: "#64B3001A",
    icon: OdontologyIcon,
    children: ["Răng hàm mặt", "Nhổ răng", "Hàn răng", "Nẹp răng"],
  },
  {
    key: "6",
    title: "Tim mạch",
    colorPrimary: "#EF4343",
    colorSecond: "#EF43431A",
    icon: BloodPressureIcon,
    children: [
      "Khám tim mạch",
      "Thăm khám tim mạch",
      "Chẩn đoán tim mạch",
      "Khám sức khoẻ tim mạch",
      "Thăm khám tim mạch chuyên khoa",
      "Thăm khám tim mạch đa khoa",
    ],
  },
  {
    key: "7",
    title: "Nội khoa",
    colorPrimary: "#F09F25",
    colorSecond: "#F09F251A",
    icon: HealthDataIcon,
    children: [
      "Khám nội khoa",
      "Điều trị bệnh",
      "Thăm khám nội khoa",
      "Chẩn đoán bệnh",
      "Thăm khám nội khoa chuyên khoa",
      "Thăm khám nội khoa đa khoa",
    ],
  },
  {
    key: "8",
    title: "Y tế",
    colorPrimary: "#2196F3",
    colorSecond: "#2196F31A",
    icon: HealthDataIcon,
    children: [
      "Khám y tế",
      "Điều trị bệnh",
      "Thăm khám y tế",
      "Chẩn đoán bệnh",
      "Thăm khám y tế chuyên khoa",
      "Thăm khám y tế đa khoa",
    ],
  },
];

export const dataDocManagements = Array.from<DocManagementType>({
  length: 46,
}).map<DocManagementType>((_, i) => ({
  key: i + 1,
  name: `Giấy chứng nhận sàng lọc Covid ${i + 1}`,
  date: "12/12/2021",
  author: `Alan Hạnh Nguyễn`,
  type: "Giấy chứng nhận y tế",
  file:
    i % 2
      ? "https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf"
      : "https://storage-vnportal.vnpt.vn/cbg-ubnd/sitefolders/root/3366/demo.pdf",
}));
