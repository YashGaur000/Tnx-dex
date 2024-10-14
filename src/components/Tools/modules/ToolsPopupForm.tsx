import { useState } from 'react';
import { GlobalButton } from '../../common';
import {
  FormInput,
  FormLable,
  FormMainContainer,
  FormTextArea,
  PopupFormCard,
  ShareFormParagraph,
  ToggleContainer,
  ToggleSwitch,
  ToolPopupFormData,
  ToolsPopupFromHeading,
  ToolsPopupFromMaincontainer,
} from '../styles/ToolsPopupForm.style';
import {
  CardsDescription,
  CardsTitleData,
  ToolsDataHeading,
} from '../styles/ToolsScreen.style';

const ToolsPopupForm = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <ToolsPopupFromMaincontainer>
        <ToolsPopupFromHeading>
          <ToolsDataHeading>Token Listing Request</ToolsDataHeading>
          <CardsDescription>
            Please provide the following information about your project.
          </CardsDescription>
        </ToolsPopupFromHeading>
        <FormMainContainer>
          <ToolPopupFormData>
            <FormLable>Project Name </FormLable>
            <FormInput type="text" placeholder="Enter your project  name" />
          </ToolPopupFormData>
          <ToolPopupFormData>
            <FormLable>Telegram Handle(s) for chat with team </FormLable>
            <FormInput type="text" placeholder="Enter your telegram handle" />
          </ToolPopupFormData>
          <ToolPopupFormData>
            <FormLable>Base token contract link </FormLable>
            <FormInput
              type="text"
              placeholder="Provide base token contract link"
            />
          </ToolPopupFormData>
          <ToolPopupFormData>
            <FormLable>
              Links to contract addresses on other chains (optional){' '}
            </FormLable>
            <FormInput
              type="text"
              placeholder="Provide links to contracts addresses"
            />
          </ToolPopupFormData>
          <ToolPopupFormData>
            <FormLable>Token logo (link to SVG) </FormLable>
            <FormInput type="text" placeholder="Provide links to token logo" />
          </ToolPopupFormData>
          <ToolPopupFormData>
            <FormLable>Code/Github repository</FormLable>
            <FormInput
              type="text"
              placeholder="Provide link to code/github repository"
            />
          </ToolPopupFormData>
          <ToolPopupFormData>
            <FormLable>Project documentation </FormLable>
            <FormInput
              type="text"
              placeholder="Provide link to project documentation"
            />
          </ToolPopupFormData>
          <ToolPopupFormData>
            <FormLable>Describe your token contract and any minting </FormLable>
            <FormTextArea placeholder="Please describe your token contract and any minting and admin functions that exist and why they are needed to support the project and how they are protected from misuse." />
          </ToolPopupFormData>
          <ToolPopupFormData>
            <ShareFormParagraph>
              Please share your incentivization plan and how you will distribute
              tokens via voting incentives
            </ShareFormParagraph>
            <FormInput type="text" placeholder="" />
          </ToolPopupFormData>
          <PopupFormCard>
            <ToggleContainer>
              <CardsTitleData>
                This is a newly launched project or a Base native project
                without a presence on other chains
              </CardsTitleData>
              <ToggleSwitch onClick={() => setIsToggled(!isToggled)} />
            </ToggleContainer>
          </PopupFormCard>
          <GlobalButton width="160px" height="40px" margin="0px" fontSize={16}>
            Submit Request
          </GlobalButton>
        </FormMainContainer>
      </ToolsPopupFromMaincontainer>
    </>
  );
};

export default ToolsPopupForm;
