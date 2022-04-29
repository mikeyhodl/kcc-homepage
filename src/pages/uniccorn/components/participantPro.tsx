import React from 'react'
import styled from 'styled-components'
import { FadeInUp } from '../../../utils/animation'
import UnicornTitle from './UnicornTitle'
import { useResponsive } from '../../../utils/responsive'


const Content = styled.div`

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 98px;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`
const ListCon = styled.div`
   max-width: 1440px;
   margin: 0 auto;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   textAlign: center;
   align-items: center;
   margin-top: 98px;
`
const ListItem = styled.a`
    width: 273px;
    height: 142px;
    margin-bottom: 44px;
    border-radius: 8px;
    text-align: center;
    background: rgba(255, 255, 255, 0.16);
    line-height: 142px;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
`   

const Image = styled.img`
    max-width: 210px;
    max-height: 97px;
    object-fit: scale-down;
`
const ParticipantName = styled.div`
    font-family: 'SF Pro Text';
    font-size: 18px;
    line-height: 20px;
    textAlign: 'center';
    /* identical to box height, or 133% */
    color: #ffffff;
    margin-top: 20px;
    height: 40px;
`

const partnerList1 = [
  {
    logo: require('../../../assets/images/unicorn/saffron.png').default,
    name: 'saffron',
    link: 'https://kcc.saffron.finance/#home',
  },
  {
    logo: require('../../../assets/images/unicorn/kuSwap.png').default,
    name: 'KuSwap',
    link: 'https://kuswap.finance/#/swap',
  },
  {
    logo: require('../../../assets/images/unicorn/pencilDao.png').default,

    name: 'PencilDAO',
    link: 'https://www.pencildao.com/staking.html#lomen-staking',
  },
  {
    logo: require('../../../assets/images/unicorn/kupay.png').default,
    name: 'KuPay',
    link: 'https://kupay.finance/',
  },
  {
    logo: require('../../../assets/images/unicorn/openLeverage.png').default,
    name: 'OpenLeverage',
    link: 'https://openleverage.finance/',
  },
  {
    logo: require('../../../assets/images/unicorn/kuDoge.png').default,
    name: 'KuDoge',
    link: 'https://kudoge.io/home',
  },
  {
    logo: require('../../../assets/images/unicorn/killSwitch.png').default,
    name: 'KillSwitch',
    link: 'https://killswitch.finance/',
  },
  {
    logo: require('../../../assets/images/unicorn/hashtag.png').default,
    name: 'XHashtag',
    link: 'https://www.xhashtag.io/',
  },
  {
    logo: require('../../../assets/images/unicorn/bridge.png').default,
    name: 'Bridge',
    link: 'https://www.bridgenetwork.com/',
  },
  {
    logo: require('../../../assets/images/unicorn/mojito.png').default,
    name: 'MojitoSwap',
    link: 'https://app.mojitoswap.finance/',
  },
  {
    logo: require('../../../assets/images/unicorn/boringDao.png').default,
    name: 'BoringDAO',
    link: 'https://www.boringdao.com/',
  },
  {
    logo: require('../../../assets/images/unicorn/amara.png').default,
    name: 'Amara Finance',
    link: 'https://www.amara.link/',
  },
  {
    logo: require('../../../assets/images/unicorn/emiSwap.png').default,
    name: 'EmiSwap',
    link: 'https://emiswap.com/main',
  },
  {
    logo: require('../../../assets/images/unicorn/treasureland.png').default,
    name: 'Treasureland',
    link: 'https://treasureland.market/',
  },
  {
    logo: require('../../../assets/images/unicorn/tokenPocket.png').default,
    name: 'Token Pocket',
    link: 'https://www.tokenpocket.pro/',
  },
  {
    logo: require('../../../assets/images/unicorn/bitkeep.png').default,
    name: 'Bitkeep',
    link: 'https://bitkeep.com/',
  },
  {
    logo: require('../../../assets/images/unicorn/coinhub.png').default,
    name: 'Coinhub Wallet',
    link: 'https://www.coinhub.org/',
  },


  {
    logo: require('../../../assets/images/unicorn/swap.png').default,
    name: 'Transit Finance',
    link: 'https://swap.transit.finance/#/',
  },
  {
    logo: require('../../../assets/images/unicorn/dcent.png').default,
    name: "D'Cent Wallet",
    link: '	https://dcentwallet.com/MobileApp',
  },
  {
    logo: require('../../../assets/images/unicorn/nabox.png').default,
    name: 'Nabox',
    link: 'https://nabox.io/',
  },
  {
    logo: require('../../../assets/images/unicorn/turboStarter.png').default,
    name: 'TurboStarter',
    link: 'https://app.turbostarter.io',
  },
  {
    logo: require('../../../assets/images/unicorn/infinity.png').default,
    name: 'Infinity Wallet',
    link: 'https://infinitywallet.io/',
  },
  {
    logo: require('../../../assets/images/unicorn/lend.png').default,
    name: 'Oxlend',
    link: 'https://www.0xlend.io/#/market',
  },
  {
    logo: require('../../../assets/images/unicorn/organix.png').default,
    name: 'Organix',
    link: 'https://app.turbostarter.iohttps://www.ogx.network/#/',
  },
  {
    logo: require('../../../assets/images/unicorn/kuCake.png').default,
    name: 'KuCake',
    link: 'https://kucake.com/#/',
  },
  {
    logo: require('../../../assets/images/unicorn/tatum.png').default,
    name: 'Tatum',
    link: 'https://tatum.io/',
  },
  {
    logo: require('../../../assets/images/unicorn/fort.png').default,
    name: 'FORT Protocol',
    link: 'https://fortprotocol.com/',
  }, 
  {
    logo: require('../../../assets/images/unicorn/poly.png').default,
    name: 'Poly Network',
    link: 'https://poly.network/#/',
  },
  {
    logo: require('../../../assets/images/unicorn/sumer.png').default,
    name: 'Sumer.money',
    link: 'https://app.sumer.money/',
  }, {
    logo: require('../../../assets/images/unicorn/light.png').default,
    name: 'Light DeFi',
    link: 'https://lightdefi.org/',
  }, 
  {
    logo: require('../../../assets/images/unicorn/guru.png').default,
    name: 'Guru Network',
    link: 'https://kcc.guru/',
  },
  {
    logo: require('../../../assets/images/unicorn/dexTools.png').default,
    name: 'Dextools',
    link: 'https://www.dextools.io/',
  }
]
  
const participantPro = () => {
    const { isMobile } = useResponsive();
    return (
        <Content>
          <UnicornTitle title="Participating projects" />
          <ListCon>
               {
                partnerList1.map((item, index)=>{
                    return (
                        <ListItem
                            key={index}
                            href={item.link}
                        >
                         <Image   src={item.logo}></Image>
                        </ListItem>
                    )
                })
               } 
          </ListCon>
        </Content>
    )
}

export default participantPro