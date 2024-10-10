import { doctor1Image, doctor2Image, doctor3Image } from "@/assets/images";
import { BabyIcon, BoneIcon, PregnantIcon } from "@/assets/svg";

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
