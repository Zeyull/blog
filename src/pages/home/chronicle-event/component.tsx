import { HomeTwoTone } from '@ant-design/icons';
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
    icon: <HomeTwoTone className={styles.icon} twoToneColor="#52c41a" />,
    label: 'chronicle_events_label_start',
    date: '2024-06-25',
  },
];

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
                {' '}
                <FormattedMessage id={item.label} />{' '}
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
