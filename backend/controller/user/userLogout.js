async function userLogout(req, res) {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: true, // Match the options used when setting the cookie
            sameSite: 'None', // Match the options used when setting the cookie
            path: '/', // Match the options used when setting the cookie
        });

        res.json({
            message: 'Logged out successfully',
            error: false,
            success: true,
            data: []
        });
    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userLogout;
