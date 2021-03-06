import * as React from 'react';

interface IUniversityProps {
    href: string;
    imgSrc: string;
    title: string;
    uniText: string;
    wrapperItemCounter: string;
}

interface IUniversityState {
    href: string;
    imgSrc: string;
    title: string;
    uniText: string;
    wrapperItemCounter: string;
}

class University extends React.Component<IUniversityProps, IUniversityState> {

    constructor(props: IUniversityProps) {
        super(props);
        this.state = {
            href: this.props.href,
            imgSrc: this.props.imgSrc,
            title: this.props.title,
            uniText: this.props.uniText,
            wrapperItemCounter: this.props.wrapperItemCounter,
        };
    }

    public render() {
        return ( 
            <div className={this.state.wrapperItemCounter}> {/*TODO: do this with react-jss*/}
            <p>
                <a href={this.state.href} target="_blank" rel="noopener noreferrer">
                    <img loading="lazy" className="aligncenter" title={this.state.title} src={this.state.imgSrc} alt={this.state.title} width="105" height="105" />
                </a>
                <div dangerouslySetInnerHTML={{
                    __html: this.state.uniText
                }}></div>
            </p>
            </div>

        );
    }
}
export default University;