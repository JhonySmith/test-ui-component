import styled from 'styled-components';

interface ITab {
	selected: boolean;
}

export const Tab = styled.li<ITab>`
	padding: 8px 16px 8px 16px;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 1s;
	background-color: ${(props) => (props.selected ? '#f9da36' : 'white')};

	&:hover {
		opacity: 0.8;
	}
`;
