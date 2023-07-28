const addressService = require('../service/AddressService');

// Thêm địa chỉ mới cho người dùng
const addOrUpdateUserAddress = async (req, res) => {
    const { addressId, addressLine1, addressLine2, isDefault } = req.body;
    const { userId } = req.params;
    try {
        const address = await addressService.addOrUpdateUserAddress(
            userId,
            addressId,
            addressLine1,
            addressLine2,
            isDefault
        );
        res.status(200).json({ message: 'Address added or updated successfully', address });
        console.log(address);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add or update address', error: error.message });
        console.log(error);
    }
};

// Lấy danh sách địa chỉ của người dùng
const getUserAddresses = async (req, res) => {
    const { userId } = req.params;
    try {
        const addresses = await addressService.getUserAddresses(userId);
        res.status(200).json({ addresses });
        console.log(addresses);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get user addresses', error: error.message });
        console.log(error);
    }
};

// Cập nhật địa chỉ mặc định của người dùng
const updateDefaultAddress = async (req, res) => {
    const { addressId, addressLine1, addressLine2, isDefault } = req.body;
    const { userId } = req.params;
    try {
        const address = await addressService.updateDefaultAddress(
            userId,
            addressId,
            addressLine1,
            addressLine2,
            isDefault
        );
        res.status(200).json({ message: 'Default address updated successfully', address });
        console.log(address);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update default address', error: error.message });
        console.log(error);
    }
};

// Xóa địa chỉ của người dùng
const deleteAddress = async (req, res) => {
    const { addressId } = req.body;
    const { userId } = req.params;
    try {
        const address = await addressService.deleteAddress(userId, addressId);
        res.status(200).json({ message: 'Address deleted successfully', address });
        console.log(address);
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete address', error: error.message });
        console.log(error);
    }
};

module.exports = {
    addOrUpdateUserAddress,
    getUserAddresses,
    updateDefaultAddress,
    deleteAddress,
};
