import type { SvgIconComponent } from '@mui/icons-material';

type Props = {
  color: string;
  height: number;
  type: SvgIconComponent;
  width: number;
};

export const SvgIcon: React.FC<Props> = ({ color, height, type: Icon, width }) => {
  return <Icon style={{ color, height, width }} />;
};
