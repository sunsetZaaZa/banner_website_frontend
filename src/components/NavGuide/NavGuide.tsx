import { Link } from 'react-router';
import './NavGuide.scss';

export default function NavGuide() {
    return (
        <span>
            <ul className="navGuideMover">
                <li className="NavTopic">
                    <Link style={{ textDecoration: 'none' }} to="/">wickerblocks</Link>
                </li>
                <li className="NavEntry">
                    <Link style={{ textDecoration: 'none' }} to="/mobileapps">mobile apps</Link>
                </li>
                <li className="NavEntry">
                    <Link style={{ textDecoration: 'none' }} to="/consulting">consulting</Link>
                </li>
                <li className="NavEntry">
                    <Link style={{ textDecoration: 'none' }} to="/about">contact</Link>
                </li>
            </ul>
        </span>
    )
}