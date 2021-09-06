import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { Global } from './styles';

import Header from '../Header';
import Conditional from '../../../hocs/Conditional';
import MyProfileForm from '../MyProfileForm';
import RandomUserForm from '../../home/RandomUserForm';
import HashtagSearch from '../../home/HashtagSearch';
import RelatedCheck from '../../home/RelatedCheck';
import FeelSelectForm from '../../diary/FeelSelectForm';
import { RootState } from '../../../reducers';

interface LayoutProps {
  children: ReactNode;
  main?: boolean;
  profile?: boolean;
  related?: boolean;
  diary?: boolean;
}

const Layout = ({ children, main = false, profile = false, related = false, diary = false }: LayoutProps) => {
  const { me } = useSelector((state: RootState) => state.user);

  return (
    <div>
      <Global />
      <Header />

      <Row gutter={10}>
        <Col xs={0} sm={2} md={6} lg={8} xxl={9}>
          {/*  */}
        </Col>

        <Col xs={24} sm={20} md={12} lg={9} xxl={7}>
          {children}
        </Col>

        <Col xs={0} sm={0} md={0} lg={7} xxl={6}>
          <Conditional condition={me && me.id && profile}>
            <MyProfileForm />
            {/* <RandomUserForm /> */}
          </Conditional>

          <Conditional condition={me && me.id && main}>
            <RelatedCheck check={false} />
            <MyProfileForm />
            <RandomUserForm />
            <HashtagSearch />
          </Conditional>

          <Conditional condition={me && me.id && related}>
            <RelatedCheck check />
            <MyProfileForm />
            <RandomUserForm />
          </Conditional>

          <Conditional condition={me && me.id && diary}>
            <FeelSelectForm />
          </Conditional>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
