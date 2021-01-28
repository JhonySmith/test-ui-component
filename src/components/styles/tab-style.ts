import styled from 'styled-components';

interface ITab {
	selected: boolean;
}

export const Tab = styled.li<ITab>`
	padding: 8px 16px 8px 16px;
	border-radius: 8px;
	cursor: pointer;
	background-color: ${(props) => (props.selected ? '#F9DA36' : 'transparent')};

	&:hover {
		opacity: 0.8;
	}
`;
