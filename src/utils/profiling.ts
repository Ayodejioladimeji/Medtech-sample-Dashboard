

export const howOld = (data: any) => {
    let res: any;

    if (data === "" || !data) {
        res = "N/A"
    }

    else if (data === "10") {
        res = "Under 18"
    }
    else if (data === "8") {
        res = "31 to 40"
    }
    else if (data = "4") {
        res = "41 to 50"
    }
    else {
        res = "51 and above"
    }
    return res
}

export const situation = (data: any) => {
    let res: any;

    if (data === "" || !data) {
        res = "N/A"
    }

    else if (data === "10") {
        res = "Completely stable"
    }
    else if (data === "8") {
        res = "Stable and not expected to change in the near future"
    }
    else if (data = "4") {
        res = "Stable but may change in the future"
    }
    else {
        res = "A bit unstable"
    }
    return res
}

export const retire = (data: any) => {
    let res: any;

    if (data === "" || !data) {
        res = "N/A"
    }

    else if (data === "10") {
        res = "In more than 20 years"
    }
    else if (data === "8") {
        res = "In 11 to 20 years"
    }
    else if (data === "6") {
        res = "In 5 to 10 years"
    }
    else if (data = "4") {
        res = "In less than 5 years"
    }
    else {
        res = "I am currently retired"
    }
    return res
}

export const financial = (data: any) => {
    let res: any;

    if (data === "" || !data) {
        res = "N/A"
    }

    else if (data === "02") {
        res = "My financial situation is a bit unstable."
    }
    else if (data === "2") {
        res = "My financial situation is stable, but I need my investments to supplement my income."
    }
    else if (data === "4") {
        res = `My financial situation is stable, and I do not currently need my investments to
supplement my income. However, this may change.`
    }
    else if (data = "6") {
        res = `My financial situation is stable, and I do not use my investments to supplement my
income. However, I may need to access these funds if an unexpected emergency
arises.`
    }
    else if (data = "8") {
        res = `My financial situation is stable, and I have sufficient cash flow from my income to
meet my expenses, including unexpected emergencies.`
    }
    else {
        res = `My financial situation is completely secure and I can meet emergency requirements
without withdrawing money from long-term investments.`
    }
    return res
}

export const goal = (data: any) => {
    let res: any;

    if (data === "" || !data) {
        res = "N/A"
    }

    else if (data === "2") {
        res = "I want protection and capital preservation."
    }
    else if (data === "6") {
        res = `I want protection and investment growth. I prefer an investment mix that will
generate both income and long-term capital growth.`
    }
    else if (data = "8") {
        res = `I want protection and long-term investment growth, but I am willing to invest a
small portion in fixed-income securities for stability`
    }
    else {
        res = "I am primarily interested in maximum investment growth over the long term"
    }
    return res
}

export const withdraw = (data: any) => {
    let res: any;

    if (data === "" || !data) {
        res = "N/A"
    }

    else if (data === "2") {
        res = "I want protection and capital preservation."
    }

    else if (data = "8") {
        res = `Yes`
    }
    else {
        res = "No"
    }
    return res
}

export const when = (data: any) => {
    let res: any;

    if (data === "" || !data) {
        res = "N/A"
    }

    else if (data === "0") {
        res = "In less than 10 years"
    }
    else if (data === "5") {
        res = `Between 10 and 15 years`
    }
    else if (data = "8") {
        res = `Between 16 and 20 years`
    }
    else {
        res = "In more than 20 years"
    }
    return res
}

export const percentage = (data: any) => {
    let res: any;

    if (data === "" || !data) {
        res = "N/A"
    }

    else if (data === "0") {
        res = "More than 50%."
    }
    else if (data === "2") {
        res = `30% to 50%.`
    }

    else {
        res = "Less than 30%."
    }
    return res
}

export const likely = (data: any) => {
    let res: any;

    if (data === "" || !data) {
        res = "N/A"
    }

    else if (data === "0") {
        res = "Portfolio A: Earns an investment return of 5% or a loss of 0%."
    }
    else if (data === "2") {
        res = `Portfolio B: Earns an investment return of 15% or a loss of 5%`
    }
    else if (data = "5") {
        res = `Portfolio C: Earns an investment return of 25% or a loss of 10%`
    }
    else if (data = "8") {
        res = `Portfolio D: Earns an investment return of 40% or a loss of 15%`
    }
    else {
        res = "Portfolio E: Earns an investment return of 50% or a loss of 20%"
    }
    return res
}

export const approach = (data: any) => {
    let res: any;

    if (data === "" || !data) {
        res = "N/A"
    }

    else if (data === "2") {
        res = `I am not comfortable taking risks with my capital, but I am prepared to do so with a
small portion of my assets because I need some capital appreciation to offset
inflation`
    }
    else if (data === "4") {
        res = `I am comfortable taking risks with my capital for potentially greater returns, but I am
prepared to do so with only less than 50% of my assets.`
    }
    else if (data = "6") {
        res = `I am comfortable taking risks with my capital for potentially greater returns, and I
am prepared to do so with more than 50% of my assets`
    }
    else {
        res = `I am comfortable taking risks with my capital for potentially greater returns. I have
an aggressive investment approach and I am investing for the long term.`
    }
    return res
}