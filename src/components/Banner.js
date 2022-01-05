import {AlertIcon, ArrowRightIcon} from '@primer/octicons-react';
import {useTranslation} from 'react-i18next';

function Banner(props) {
  const {t} = useTranslation();

  return (
    <div className="Banner fadeInDown" style={{animationDelay: '0.4s'}}>
      <div className="wrapper">
        
        </div>
        <div className="content">
          {t(
            'This website has been managed , developed and hosted by Kendriya Vidyalaya No.1 Agartala Kunjaban.'
          )}{' '}
        </div>
        <a
          href="https://blog.covid19india.org/2021/08/07/end"
          rel="noreferrer"
          target="_blank"
        >
          {t('Read more')}
          <div className="arrow-right-icon">
            <ArrowRightIcon size={16} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Banner;
