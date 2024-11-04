type OptionProps = {
  value: string | number;
  label: string;
  [key: string]: any;
};

type NewsProps = {
  title: string;
  desc: string;
  image?: StaticImageData | string;
}

type HealthIndexProps = {
  key: string;
  title: string;
  value: string;
  unit: string;
  desc: string;
  icon: any;
  colorIcon?: string;
  path: string;
  moreData?: {
    title: string;
    desc: string;
    news?: NewsProps[]
  }
};

interface DocManagementType {
  key: React.Key;
  name: string;
  date: string;
  author: string;
  type: string;
  file?: string;
}
