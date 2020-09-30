// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddDebt extends ethereum.Event {
  get params(): AddDebt__Params {
    return new AddDebt__Params(this);
  }
}

export class AddDebt__Params {
  _event: AddDebt;

  constructor(event: AddDebt) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get debtShare(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Alohomora extends ethereum.Event {
  get params(): Alohomora__Params {
    return new Alohomora__Params(this);
  }
}

export class Alohomora__Params {
  _event: Alohomora;

  constructor(event: Alohomora) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get loan(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Kedavra extends ethereum.Event {
  get params(): Kedavra__Params {
    return new Kedavra__Params(this);
  }
}

export class Kedavra__Params {
  _event: Kedavra;

  constructor(event: Kedavra) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get killer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get prize(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get left(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RemoveDebt extends ethereum.Event {
  get params(): RemoveDebt__Params {
    return new RemoveDebt__Params(this);
  }
}

export class RemoveDebt__Params {
  _event: RemoveDebt;

  constructor(event: RemoveDebt) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get debtShare(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Gringotts__positionsResult {
  value0: Address;
  value1: Address;
  value2: BigInt;

  constructor(value0: Address, value1: Address, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class Gringotts__positionInfoResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Gringotts extends ethereum.SmartContract {
  static bind(address: Address): Gringotts {
    return new Gringotts("Gringotts", address);
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, value: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(value)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  config(): Address {
    let result = super.call("config", "config():(address)", []);

    return result[0].toAddress();
  }

  try_config(): ethereum.CallResult<Address> {
    let result = super.tryCall("config", "config():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  decreaseAllowance(spender: Address, subtractedValue: BigInt): boolean {
    let result = super.call(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_decreaseAllowance(
    spender: Address,
    subtractedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "decreaseAllowance",
      "decreaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(subtractedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  glbDebtShare(): BigInt {
    let result = super.call("glbDebtShare", "glbDebtShare():(uint256)", []);

    return result[0].toBigInt();
  }

  try_glbDebtShare(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("glbDebtShare", "glbDebtShare():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  glbDebtVal(): BigInt {
    let result = super.call("glbDebtVal", "glbDebtVal():(uint256)", []);

    return result[0].toBigInt();
  }

  try_glbDebtVal(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("glbDebtVal", "glbDebtVal():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  increaseAllowance(spender: Address, addedValue: BigInt): boolean {
    let result = super.call(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );

    return result[0].toBoolean();
  }

  try_increaseAllowance(
    spender: Address,
    addedValue: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "increaseAllowance",
      "increaseAllowance(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(spender),
        ethereum.Value.fromUnsignedBigInt(addedValue)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lastAccrueTime(): BigInt {
    let result = super.call("lastAccrueTime", "lastAccrueTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastAccrueTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastAccrueTime",
      "lastAccrueTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nextPositionID(): BigInt {
    let result = super.call("nextPositionID", "nextPositionID():(uint256)", []);

    return result[0].toBigInt();
  }

  try_nextPositionID(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nextPositionID",
      "nextPositionID():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  positions(param0: BigInt): Gringotts__positionsResult {
    let result = super.call(
      "positions",
      "positions(uint256):(address,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Gringotts__positionsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt()
    );
  }

  try_positions(
    param0: BigInt
  ): ethereum.CallResult<Gringotts__positionsResult> {
    let result = super.tryCall(
      "positions",
      "positions(uint256):(address,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Gringotts__positionsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt()
      )
    );
  }

  reservePool(): BigInt {
    let result = super.call("reservePool", "reservePool():(uint256)", []);

    return result[0].toBigInt();
  }

  try_reservePool(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("reservePool", "reservePool():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(recipient: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(sender: Address, recipient: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    sender: Address,
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  pendingInterest(msgValue: BigInt): BigInt {
    let result = super.call(
      "pendingInterest",
      "pendingInterest(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(msgValue)]
    );

    return result[0].toBigInt();
  }

  try_pendingInterest(msgValue: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingInterest",
      "pendingInterest(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(msgValue)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  debtShareToVal(debtShare: BigInt): BigInt {
    let result = super.call(
      "debtShareToVal",
      "debtShareToVal(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(debtShare)]
    );

    return result[0].toBigInt();
  }

  try_debtShareToVal(debtShare: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "debtShareToVal",
      "debtShareToVal(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(debtShare)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  debtValToShare(debtVal: BigInt): BigInt {
    let result = super.call(
      "debtValToShare",
      "debtValToShare(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(debtVal)]
    );

    return result[0].toBigInt();
  }

  try_debtValToShare(debtVal: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "debtValToShare",
      "debtValToShare(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(debtVal)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  positionInfo(id: BigInt): Gringotts__positionInfoResult {
    let result = super.call(
      "positionInfo",
      "positionInfo(uint256):(uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return new Gringotts__positionInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_positionInfo(
    id: BigInt
  ): ethereum.CallResult<Gringotts__positionInfoResult> {
    let result = super.tryCall(
      "positionInfo",
      "positionInfo(uint256):(uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Gringotts__positionInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  totalETH(): BigInt {
    let result = super.call("totalETH", "totalETH():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalETH(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalETH", "totalETH():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _config(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DecreaseAllowanceCall extends ethereum.Call {
  get inputs(): DecreaseAllowanceCall__Inputs {
    return new DecreaseAllowanceCall__Inputs(this);
  }

  get outputs(): DecreaseAllowanceCall__Outputs {
    return new DecreaseAllowanceCall__Outputs(this);
  }
}

export class DecreaseAllowanceCall__Inputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get subtractedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DecreaseAllowanceCall__Outputs {
  _call: DecreaseAllowanceCall;

  constructor(call: DecreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class IncreaseAllowanceCall extends ethereum.Call {
  get inputs(): IncreaseAllowanceCall__Inputs {
    return new IncreaseAllowanceCall__Inputs(this);
  }

  get outputs(): IncreaseAllowanceCall__Outputs {
    return new IncreaseAllowanceCall__Outputs(this);
  }
}

export class IncreaseAllowanceCall__Inputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get addedValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IncreaseAllowanceCall__Outputs {
  _call: IncreaseAllowanceCall;

  constructor(call: IncreaseAllowanceCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class EngorgioCall extends ethereum.Call {
  get inputs(): EngorgioCall__Inputs {
    return new EngorgioCall__Inputs(this);
  }

  get outputs(): EngorgioCall__Outputs {
    return new EngorgioCall__Outputs(this);
  }
}

export class EngorgioCall__Inputs {
  _call: EngorgioCall;

  constructor(call: EngorgioCall) {
    this._call = call;
  }
}

export class EngorgioCall__Outputs {
  _call: EngorgioCall;

  constructor(call: EngorgioCall) {
    this._call = call;
  }
}

export class ReducioCall extends ethereum.Call {
  get inputs(): ReducioCall__Inputs {
    return new ReducioCall__Inputs(this);
  }

  get outputs(): ReducioCall__Outputs {
    return new ReducioCall__Outputs(this);
  }
}

export class ReducioCall__Inputs {
  _call: ReducioCall;

  constructor(call: ReducioCall) {
    this._call = call;
  }

  get share(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ReducioCall__Outputs {
  _call: ReducioCall;

  constructor(call: ReducioCall) {
    this._call = call;
  }
}

export class AlohomoraCall extends ethereum.Call {
  get inputs(): AlohomoraCall__Inputs {
    return new AlohomoraCall__Inputs(this);
  }

  get outputs(): AlohomoraCall__Outputs {
    return new AlohomoraCall__Outputs(this);
  }
}

export class AlohomoraCall__Inputs {
  _call: AlohomoraCall;

  constructor(call: AlohomoraCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get goblin(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get loan(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get maxReturn(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class AlohomoraCall__Outputs {
  _call: AlohomoraCall;

  constructor(call: AlohomoraCall) {
    this._call = call;
  }
}

export class KedavraCall extends ethereum.Call {
  get inputs(): KedavraCall__Inputs {
    return new KedavraCall__Inputs(this);
  }

  get outputs(): KedavraCall__Outputs {
    return new KedavraCall__Outputs(this);
  }
}

export class KedavraCall__Inputs {
  _call: KedavraCall;

  constructor(call: KedavraCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class KedavraCall__Outputs {
  _call: KedavraCall;

  constructor(call: KedavraCall) {
    this._call = call;
  }
}

export class UpdateConfigCall extends ethereum.Call {
  get inputs(): UpdateConfigCall__Inputs {
    return new UpdateConfigCall__Inputs(this);
  }

  get outputs(): UpdateConfigCall__Outputs {
    return new UpdateConfigCall__Outputs(this);
  }
}

export class UpdateConfigCall__Inputs {
  _call: UpdateConfigCall;

  constructor(call: UpdateConfigCall) {
    this._call = call;
  }

  get _config(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateConfigCall__Outputs {
  _call: UpdateConfigCall;

  constructor(call: UpdateConfigCall) {
    this._call = call;
  }
}

export class WithdrawReserveCall extends ethereum.Call {
  get inputs(): WithdrawReserveCall__Inputs {
    return new WithdrawReserveCall__Inputs(this);
  }

  get outputs(): WithdrawReserveCall__Outputs {
    return new WithdrawReserveCall__Outputs(this);
  }
}

export class WithdrawReserveCall__Inputs {
  _call: WithdrawReserveCall;

  constructor(call: WithdrawReserveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawReserveCall__Outputs {
  _call: WithdrawReserveCall;

  constructor(call: WithdrawReserveCall) {
    this._call = call;
  }
}

export class RecoverCall extends ethereum.Call {
  get inputs(): RecoverCall__Inputs {
    return new RecoverCall__Inputs(this);
  }

  get outputs(): RecoverCall__Outputs {
    return new RecoverCall__Outputs(this);
  }
}

export class RecoverCall__Inputs {
  _call: RecoverCall;

  constructor(call: RecoverCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RecoverCall__Outputs {
  _call: RecoverCall;

  constructor(call: RecoverCall) {
    this._call = call;
  }
}
