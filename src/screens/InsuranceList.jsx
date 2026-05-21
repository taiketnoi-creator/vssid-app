import frameInsurance from '../assets/frame_insurance.png';

const W = 402;
const H = 874;

const InsuranceList = ({ onNavigate }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <img src={frameInsurance} alt="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }} draggable={false} />

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {/* Back arrow: x~10, y~20, enlarged hit area */}
        <div
          onClick={() => onNavigate('dashboard', { transition: 'slide', direction: 'right' })}
          style={{
            position: 'absolute',
            left: `${0 / W * 100}%`,
            top: `${5 / H * 100}%`,
            width: `${60 / W * 100}%`,
            height: `${55 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* Table row 1: y~308-375 (Group 3 y=307, h=66; table row starts at y308, each row ~66px) */}
        <div
          onClick={() => onNavigate('salary-detail', { transition: 'slide-up', direction: 'left' })}
          style={{
            position: 'absolute',
            left: `${9 / W * 100}%`,
            top: `${308 / H * 100}%`,
            width: `${382 / W * 100}%`,
            height: `${66 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* Table row 2: y~374-440 */}
        <div
          onClick={() => onNavigate('salary-detail', { transition: 'slide-up', direction: 'left' })}
          style={{
            position: 'absolute',
            left: `${9 / W * 100}%`,
            top: `${374 / H * 100}%`,
            width: `${382 / W * 100}%`,
            height: `${66 / H * 100}%`,
            cursor: 'pointer'
          }}
        />

        {/* Bottom nav: y=823, h=65 */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: `${823 / H * 100}%`,
          width: '100%',
          height: `${65 / H * 100}%`,
          display: 'flex'
        }}>
          <div onClick={() => onNavigate('dashboard', { transition: 'instant' })} style={{ flex: 1, cursor: 'pointer' }} />
          <div style={{ flex: 1, cursor: 'pointer' }} />
          <div style={{ flex: 1, cursor: 'pointer' }} />
          <div style={{ flex: 1, cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default InsuranceList;
