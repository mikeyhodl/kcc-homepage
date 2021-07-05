import React, { lazy } from 'react'
import { Link, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { BridgeHistoryList, BridgeOrderDetail, BridgeTransfer, BridgeOrderConfirm } from '../../App'

import { useConnectWalletModalShow } from '../../state/wallet/hooks'
import WalletListModal from '../../components/WalletListModal'

import '../../styles/transition.css'

export interface BridgePageProps {}

const TopBg = require('../../assets/images/bridge/top-bg.svg').default
const CenterBg = require('../../assets/images/bridge/center-bg@2x.png').default

const BridgeWrap = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  min-height: calc(100vh - 200px);
  background: url(${TopBg}) center 80px no-repeat, #000;
`

const NavBg = styled.div`
  height: 80px;
  width: 100%;
  background: rgba(0, 0, 0, 1);
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding-bottom: 80px;
`

const CenterBgImg = styled.img`
  position: absolute;
  width: 80%;
  top: 250px;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
`

const ButtonBgImg = styled.img`
  position: absolute;
  width: 100%;
  heigth: 800px;
  bottom: 0;
  left: 0;
`

const BridgePage: React.FunctionComponent<BridgePageProps> = ({ children }) => {
  const router = useHistory()
  const { path } = useRouteMatch()
  /*   React.useEffect(() => {
    if (path === '/bridge') {
      router.push('/bridge/transfer')
    }
  }, []) */

  const location = useLocation()

  const walletListModalShow = useConnectWalletModalShow()

  return (
    <BridgeWrap>
      <WalletListModal visible={walletListModalShow} />
      <NavBg />
      <Content>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          >
            <Switch>
              <Route path="/bridge/transfer" component={BridgeTransfer} />
              <Route path="/bridge/list" component={BridgeHistoryList} />
              <Route path="/bridge/detail" component={BridgeOrderDetail} />
              <Route path="/bridge/confirm" component={BridgeOrderConfirm} />
            </Switch>
          </CSSTransition>
        </SwitchTransition>
      </Content>

      <CenterBgImg src={CenterBg} />
      <ButtonBgImg src={require('../../assets/images/bridge/bottom-bg@2x.png').default} />
    </BridgeWrap>
  )
}

export default BridgePage