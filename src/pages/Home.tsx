import styled from "styled-components";
import { decor, homeImg, logo } from "../static";
import { useAppDispatch } from "../hooks/redux";
import { logout, refreshToken } from "../store/reducers/auth/action";

export const Home = () => {
	const dispatch = useAppDispatch();

	const onLogoutClick = async () => {
		const token = localStorage.getItem("refreshToken");
		if (token) await dispatch(refreshToken({ refreshToken: token }));
		await dispatch(logout());
	};

	return (
		<Wrapper>
			<Logo src={logo} />
			<Content>
				<h2>Congratulations</h2>
				<h6>
					Now you are on the main page. Soon we will provide you with detailed feedback on the
					result of your work
				</h6>
				<Button onClick={onLogoutClick}>Log Out</Button>
				<ImageWrapper>
					<img src={homeImg} />
				</ImageWrapper>
			</Content>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: #1d283a;
	min-height: 100vh;
	padding: 0 60px;
`;
const Logo = styled.img`
	margin-top: 48px;
`;
const Content = styled.div`
	margin-top: 110px;
	text-align: center;
	& > h2 {
		font-size: 48px;
		line-height: 150%;
		font-weight: 700;
		margin-bottom: 48px;
		text-transform: uppercase;
		position: relative;
		display: inline-block;
		&::after {
			content: "";
			width: 237px;
			height: 188px;
			top: -116px;
			right: -116px;
			position: absolute;
			background-image: url(${decor});
		}
	}
	& > h6 {
		max-width: 466px;
		margin: 0 auto 48px;
	}
`;
const ImageWrapper = styled.div`
	text-align: center;
	& > img {
		margin: 72px 0 40px;
	}
`;
const Button = styled.div`
	padding: 10px 16px;
	background: #539713;
	cursor: pointer;
	display: inline-block;
	box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14),
		0px 1px 5px rgba(0, 0, 0, 0.12);
`;
