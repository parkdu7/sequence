// 2024-11-18 18:09 승균 작성
// 2024-11-19 18:47 준용 작성
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from '../asset/component/Header';
import Profile from './component/ProfileHeader';
import PersonalHistory from './page/PersonalHistory';
import Portfolio from './page/Portfolio';
import MemberEvaluation from './page/MemberEvaluation';
import MyActivity from './page/MyActivity';
import { getMyInfo } from '../api/myInfo';
import { HistoryDataType } from './types/history.types';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #151515;
  color: #fff;
  padding-top: 120px;
  
`

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin-bottom: clamp(3rem, 5vw, 5rem);
`

interface TabButtonProps {
  isActive: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  flex: 1;
  padding: clamp(0.3rem, 2vw, 1.5rem);
  margin-top: clamp(0.5rem, 2vw, 2rem);
  border: none;
  background-color: ${({ isActive }) => (isActive ? '#E32929' : '#151515')};
  color: #F5F5F5;
  cursor: pointer;
  border: 1px solid ${({isActive}) => (isActive? '#E32929': '#9E9E9E')};
  font-size: clamp(0.6rem, 2vw, 1.3rem);
  font-family: 'Noto Sans';

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#E32929' : '#151515')};
  }
`

type Tab = 'PersonalHistory' | 'Portfolio' | 'MemberEvaluation' | 'MyActivity';

const ContentContainer = styled.div<{ isPortfolio: boolean }>`
  width: ${({ isPortfolio }) => (isPortfolio ? '90%' : '75%')};
`

const MyPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>('PersonalHistory');
  const [profileData, setProfileData] = useState<any>(null);
  const [historyData, setHistoryData] = useState<HistoryDataType>({
    introduction: '',
    experiences: [],
    careers: [],
    awards: [],
    portfolio: []
  });
  const nickname = localStorage.getItem('nickname');

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyInfo();
      console.log("response : ", response);
      if (response.data) {
        setProfileData(response.data);
        setHistoryData({
          introduction: response.data.introduction || '',
          experiences: response.data.experiences || [],
          careers: response.data.careers || [],
          awards: response.data.awards || [],
          portfolio: response.data.portfolio || []
        });
      }
    };
    fetchData();
  }, []);

  const isOwnProfile = nickname === profileData?.nickname;

  const renderContent = () => {
    switch (activeTab) {
      case 'PersonalHistory':
        return <PersonalHistory data={historyData} />;
      case 'Portfolio':
        return <Portfolio />;
      case 'MemberEvaluation':
        return <MemberEvaluation />;
      case 'MyActivity':
        return <MyActivity />;
      default:
        return <PersonalHistory data={historyData} />;
    }
  };

  return (
    <>
      <Header headerName="MyPage" />
      <Container>
        <Profile 
          name={profileData?.nickname} 
          birth={profileData?.birth}
          skills={profileData?.skillCategory || []}
          desiredJobs={profileData?.desiredJob || []}
          schoolname={profileData?.schoolName}
        />
        <TabContainer>
          <TabButton 
            isActive={activeTab === 'PersonalHistory'} 
            onClick={() => setActiveTab('PersonalHistory')}
          >
            경력 및 활동이력
          </TabButton>
          <TabButton 
            isActive={activeTab === 'Portfolio'} 
            onClick={() => setActiveTab('Portfolio')}
          >
            포트폴리오
          </TabButton>
          <TabButton 
            isActive={activeTab === 'MemberEvaluation'} 
            onClick={() => setActiveTab('MemberEvaluation')}
          >
            팀원 평가
          </TabButton>
          {isOwnProfile && (
            <TabButton 
              isActive={activeTab === 'MyActivity'} 
              onClick={() => setActiveTab('MyActivity')}
            >
              내 활동
            </TabButton>
          )}
        </TabContainer>
        <ContentContainer isPortfolio={activeTab === 'Portfolio'}>
          {renderContent()}
        </ContentContainer>
      </Container>
    </>
  );
};

export default MyPage;