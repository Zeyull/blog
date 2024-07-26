import {
  CustomerServiceTwoTone,
  EnvironmentTwoTone,
  HomeTwoTone,
  SkinTwoTone,
  VideoCameraTwoTone,
} from '@ant-design/icons';
import { Card } from 'antd';
import { ReactElement } from 'react';
import { FormattedMessage } from 'umi';
import styles from './component.less';

interface EventInfo {
  icon: ReactElement;
  label: string;
  date: string;
  url?: string;
  [prop: string]: any;
}

const ChronicleEventInfos: Array<EventInfo> = [
  {
    icon: <VideoCameraTwoTone className={styles.icon} twoToneColor="#CE3030" />,
    label: 'chronicle_events_label_your_name',
    date: '2024-07-25',
  },
  {
    icon: <SkinTwoTone className={styles.icon} twoToneColor="#1890ff" />,
    label: 'chronicle_events_label_start_fitness',
    date: '2024-07-20',
  },
  {
    icon: (
      <CustomerServiceTwoTone className={styles.icon} twoToneColor="#1890ff" />
    ),
    label: 'chronicle_events_label_start_sing',
    date: '2024-07-20',
  },
  {
    icon: <EnvironmentTwoTone className={styles.icon} twoToneColor="#1890ff" />,
    label: 'chronicle_events_label_move_house',
    date: '2024-07-14',
  },
  {
    icon: <HomeTwoTone className={styles.icon} twoToneColor="#52c41a" />,
    label: 'chronicle_events_label_start',
    date: '2024-06-25',
  },
];

// todo
// 事记前加上icon或者emoji
export default function ChronicleEvent() {
  return (
    <>
      <Card
        className={styles.card}
        title={<FormattedMessage id="chronicle_event_label" />}
      >
        <span className={`${styles.line} ${styles.update}`}>
          <FormattedMessage id={'chronicle_event_update_line_label'} />
        </span>

        {ChronicleEventInfos.map((item, index) => {
          return (
            <div key={index} className={styles.event}>
              {item.icon}
              <span className={styles.date}>{item.date}</span>
              <span className={styles.label}>
                <FormattedMessage id={item.label} />
              </span>
            </div>
          );
        })}
        <span className={`${styles.line} ${styles.end}`}>
          <FormattedMessage id={'chronicle_event_end_line_label'} />
        </span>
      </Card>
    </>
  );
}
