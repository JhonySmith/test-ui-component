import styled from 'styled-components';

interface ITabItem {
	selected: boolean;
	duration: number;
}

export const TabItem = styled.li<ITabItem>`
	padding: 8px 16px 8px 16px;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color ${(props) => props.duration}s;
	background-color: ${(props) => (props.selected ? '#f9da36' : 'white')};

	&:hover {
		opacity: 0.8;
	}
`;
