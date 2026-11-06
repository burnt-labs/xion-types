import XCTest
import SwiftProtobuf
@testable import XionTypesCosmos

final class Sdk055Tests: XCTestCase {
    func testBaseAccountDecodesHighBitAccountNumber() throws {
        let hex = "0a3f78696f6e31717161706b3574326d3061387a656878356c727565666a666a78736533687670346e706c6a6d746c7974657737786178753637737438753778741893bce9ed8882f6ffa6012001"
        var bytes = [UInt8]()
        var index = hex.startIndex
        while index < hex.endIndex {
            let next = hex.index(index, offsetBy: 2)
            bytes.append(UInt8(hex[index..<next], radix: 16)!)
            index = next
        }
        let data = Data(bytes)

        let account = try Cosmos_Auth_V1beta1_BaseAccount(serializedBytes: data)
        XCTAssertEqual(account.accountNumber, 12_033_574_294_966_132_243)
        XCTAssertEqual(account.sequence, 1)
        XCTAssertEqual(try account.serializedData(), data)

        var doc = Cosmos_Tx_V1beta1_SignDoc()
        doc.accountNumber = account.accountNumber
        let decoded = try Cosmos_Tx_V1beta1_SignDoc(serializedBytes: try doc.serializedData())
        XCTAssertEqual(decoded.accountNumber, 12_033_574_294_966_132_243)
    }
}
